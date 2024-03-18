import { useEffect, useRef, useState } from 'react';
import useDropData from './useDropData';
import { processDataTransfer, ProcessDataTransferResponse } from './misc/utils';

type UseDropFiles = {
    disabled?: boolean;
    extensions?: string[];
};
type UseDropFileSystemResponse = [
    ProcessDataTransferResponse | null,
    React.RefObject<HTMLDivElement>,
    boolean,
];

/**
 * Use this hook to receive list of dragged files and folders.
 * @param extensions: list of supported extensions. Exclude if you'd like to return all. e.g. ['docx', 'png', 'jpg']
 * @param disabled: checks if drop target should be disabled from receiving dragged files
 * @returns
 */
const useDropFileSystem = ({
    extensions = [],
    disabled = false,
}: UseDropFiles = {}): UseDropFileSystemResponse => {
    const ref = useRef<HTMLDivElement>(null);
    const [result, setResult] = useState<ProcessDataTransferResponse | null>(
        null
    );
    const [isOver, dropData] = useDropData(ref, { disabled });
    useEffect(() => {
        if (!!dropData?.items.length) {
            (async () => {
                const result = await processDataTransfer(
                    dropData?.items,
                    extensions
                );
                setResult(result);
            })();
        }
    }, [dropData, extensions]);
    return [result, ref, isOver];
};

export default useDropFileSystem;
