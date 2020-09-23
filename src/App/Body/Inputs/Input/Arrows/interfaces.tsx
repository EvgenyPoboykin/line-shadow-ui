export interface IArrows {
    disabled: boolean;
    fieldname: string;
    onClickButtonUp: () => void;
    onClickButtonDown: () => void;
    onContextMenu: (e: React.MouseEvent) => void;
}

export interface IContainerButton {
    className: string;
    disabled: boolean;
}
