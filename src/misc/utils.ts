type AllFoldersShape = {
    name: string;
    path: string;
    parentPath?: string;
};
type FileShape = {
    file: File;
    path: string;
    folderPath?: string;
};
type WebkitEntryType = FileSystemFileEntry & FileSystemDirectoryEntry;

async function getParent(
    fileEntry: FileSystemFileEntry
): Promise<string | undefined> {
    try {
        return await new Promise((resolve, reject) =>
            fileEntry.getParent((file) => {
                resolve(file.fullPath);
            }, reject)
        );
    } catch (err) {
        console.error('get_parent_error: ', err);
        return;
    }
}

async function getFileIntoShape(
    fileEntry: FileSystemFileEntry
): Promise<FileShape | undefined> {
    try {
        const parentPath = await getParent(fileEntry);
        return await new Promise((resolve, reject) =>
            fileEntry.file((file) => {
                const data: FileShape = {
                    file,
                    path: fileEntry.fullPath,
                    folderPath: parentPath,
                };
                resolve(data);
            }, reject)
        );
    } catch (err) {
        console.error('get_file_into_shape: ', err);
        return;
    }
}

async function readDirs(dirReader: FileSystemDirectoryReader) {
    const entries: Array<FileSystemEntry> = [];
    let readEntries: Array<FileSystemEntry>;
    do {
        readEntries = await entriesPromise(dirReader);
        entries.push(...readEntries);
    } while (readEntries.length > 0);

    return entries;
}

async function entriesPromise(
    dirReader: FileSystemDirectoryReader
): Promise<Array<FileSystemEntry>> {
    return await new Promise((resolve, reject) => {
        dirReader.readEntries(resolve, reject);
    });
}

const getFileExtension = (
    filename: string,
    options?: {
        preserveCase?: boolean;
    }
) => {
    if (!filename) return '';
    const ext = (/[^./\\]*$/.exec(filename) || [''])[0];
    return options?.preserveCase ? ext : ext.toUpperCase();
};

const cleanFileName = (name: string) => {
    return name.replace(/[&\/\\#, +()$~%'":*?<>{}]/g, '_'); //replace all special characters with _ except .
};

const excludedExtensions = ['DS_STORE'];
export type ProcessDataTransferResponse = {
    files: FileShape[];
    emptyFolders: string[];
    folders: AllFoldersShape[];
};
/**
 *
 * @param dataTransfer : DataTransfer item to process
 * @param allowedExts : list of file extensions you support. e.g. ['docx', 'jpg', 'png']
 * @returns
 */
export async function processDataTransfer(
    dataTransfer: DataTransferItemList,
    allowedExtensions: string[] = []
): Promise<ProcessDataTransferResponse> {
    if (!dataTransfer) throw new Error('No data transfer found');

    const files: Array<FileShape> = [];
    const emptyFolders: string[] = [];
    const folders: Array<AllFoldersShape> = [];
    const list: Array<WebkitEntryType> = [];

    for (let i = 0; i < dataTransfer.length; i++) {
        list.push(dataTransfer[i].webkitGetAsEntry() as WebkitEntryType);
    }

    while (list.length > 0) {
        const entry = list.shift();
        if (entry) {
            if (entry.isFile) {
                const fileShape = await getFileIntoShape(entry);
                if (!!fileShape) {
                    const filename = cleanFileName(fileShape.file.name);
                    const extension = getFileExtension(filename);
                    if (excludedExtensions.includes(extension)) continue;
                    if (
                        !!allowedExtensions.length &&
                        !allowedExtensions.includes(extension)
                    ) {
                        continue;
                    }
                    files.push(fileShape);
                }
            } else if (entry.isDirectory) {
                const parentPath = await getParent(entry);
                const reader = entry.createReader();
                const result = await readDirs(reader);
                if (!result || !result.length) {
                    emptyFolders.push(entry.fullPath);
                }
                list.push(...(result as WebkitEntryType[]));
                folders.push({
                    path: entry.fullPath,
                    parentPath,
                    name: entry.name,
                });
            }
        }
    }

    return { files, folders, emptyFolders };
}
