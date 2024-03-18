import { RefObject, useEffect, useState } from 'react';

type UseDropDataOptions = {
    disabled?: boolean;
};
type UseDropDataResponse = [boolean, DataTransfer | null];

/**
 * Use this hook to get the drag data source. Its leveraged in the useDropFileSystem hook.
 * @param ref : target ref for drop state
 * @param options
 * @returns
 */
const useDropData = (
    ref: RefObject<HTMLElement>,
    options?: UseDropDataOptions
): UseDropDataResponse => {
    const [isOver, setIsOver] = useState<boolean>(false);
    const [dataTransfer, setDataTransfer] = useState<DataTransfer | null>(null);
    useEffect(() => {
        if (options?.disabled) return;

        const onDragOver = (event) => {
            event.preventDefault();
            setIsOver(true);
        };

        const onDragEnter = (event) => {
            event.preventDefault();
            setIsOver(true);
        };

        const onDragLeave = () => {
            setIsOver(false);
        };

        const onDragExit = () => {
            setIsOver(false);
        };

        const onDrop = (event: DragEvent) => {
            event.preventDefault();
            setIsOver(false);
            setDataTransfer(event.dataTransfer);
        };

        ref.current?.addEventListener('dragover', onDragOver);
        ref.current?.addEventListener('dragenter', onDragEnter);
        ref.current?.addEventListener('dragleave', onDragLeave);
        ref.current?.addEventListener('dragexit', onDragExit);
        ref.current?.addEventListener('drop', onDrop);

        return () => {
            ref.current?.removeEventListener('dragover', onDragOver);
            ref.current?.removeEventListener('dragenter', onDragEnter);
            ref.current?.removeEventListener('dragleave', onDragLeave);
            ref.current?.removeEventListener('dragexit', onDragExit);
            ref.current?.removeEventListener('drop', onDrop);
        };
    }, [ref.current, options]);

    return [isOver, dataTransfer];
};
export default useDropData;
