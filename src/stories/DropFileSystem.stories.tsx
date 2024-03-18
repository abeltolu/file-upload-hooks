import React from 'react';
import type { Meta } from '@storybook/react';
import useDropFileSystem from '../useDropFileSystem';
import './main.css';

export const DropFileSystem = () => {
    const [result, ref, isOver] = useDropFileSystem();
    const style: React.CSSProperties = {
        width: 300,
        height: 200,
        margin: '20px auto',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(isOver
            ? {
                  border: '1px solid green',
                  outline: '1px solid green',
                  background: '#fefefe',
              }
            : {}),
    };
    return (
        <div
            style={{
                padding: 10,
                width: 500,
                margin: '0 auto',
            }}
        >
            <h1>
                <strong>useDropFileSystem</strong>
            </h1>
            <p>
                Use this hook to get both files and folders that are dragged
                into the drop zone. Sample below:
            </p>
            <div ref={ref} style={style}>
                Drop files here
            </div>
            <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
    );
};
const meta = {
    title: 'File',
    component: DropFileSystem,
    parameters: {},
} satisfies Meta<typeof DropFileSystem>;

export default meta;
