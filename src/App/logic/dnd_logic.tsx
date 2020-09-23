import React, { DragEvent } from 'react';
import { ContextApp } from '../state';

const LogicOpenFile = () => {
    const { onChangeFile, interface_app } = React.useContext(ContextApp);

    const onDragOver = (e: DragEvent) => {
        if (interface_app.focus === true) return;
        e.stopPropagation();
        e.preventDefault();

        document.querySelector<HTMLDivElement>('.Body__load-container')!.style.display = 'flex';
    };
    const onDragEnter = (e: DragEvent) => {
        if (interface_app.focus === true) return;

        e.stopPropagation();
        e.preventDefault();

        document.querySelector<HTMLDivElement>('.Body__load-container')!.style.display = 'flex';
    };
    const onDragLeave = (e: DragEvent) => {
        if (interface_app.focus === true) return;

        e.stopPropagation();
        e.preventDefault();

        document.querySelector<HTMLDivElement>('.Body__load-container')!.style.display = 'none';
    };
    const onDrop = (e: DragEvent) => {
        if (interface_app.focus === true) return;

        const { dataTransfer } = e;

        e.stopPropagation();
        e.preventDefault();
        if (dataTransfer!.files[0] !== null && dataTransfer!.files[0].type === 'image/png') {
            onChangeFile(dataTransfer!.files[0]);

            document.querySelector<HTMLDivElement>('.Body__load-container')!.style.display = 'none';
        } else {
            document.querySelector<HTMLDivElement>('.Body__load-container')!.style.display = 'none';
        }
    };

    return { onDragOver, onDragEnter, onDragLeave, onDrop };
};

export default LogicOpenFile;
