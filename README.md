# File-Upload-Hooks

Contains a set of React hooks that are useful for handling file uploads.

## `useDropFileSystem`

Helps you extract files and folders from a dropped target. Use this hook when you need to get all folders (including deeply nested sub-folders), and all files from the drop target.

### Usage

```jsx
import { useDropFileSystem } from 'file-upload-hooks';

const Demo = () => {
    const [result, ref, isOver] = useDropFileSystem();
    return (
        <div>
            <div
                ref={ref}
                style={{
                    width: 200,
                    height: 200,
                    border: "1px solid ${isOver ? 'green', 'black'}",
                }}
            >
                Drop files here
            </div>
            <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
    );
};
```

### Reference

```jsx
const [result, ref, isOver] = useDropFileSystem();
```

`ref` is the reference that should be included in the drop area. This is required, as without this, we can't determine the droparea to extract the files and folders.

```jsx
<div ref={ref}></div>
```

`result` tracks the list of files and folders. It also includes an array of `emptyFolders` i.e. folders without files in them.

```json
{
    "files": [
        {
            "file": {},
            "path": "/documents/research/whitepaper.docx",
            "folderPath": "/documents/research"
        }
    ],
    "folders": [
        {
            "path": "/documents",
            "parentPath": "/",
            "name": "documents"
        },
        {
            "path": "/documents/research",
            "parentPath": "/documents",
            "name": "research"
        }
    ],
    "emptyFolders": []
}
```

`isOver`: Tracks if there's a drag event over the drop area. Useful for updating the UI.
