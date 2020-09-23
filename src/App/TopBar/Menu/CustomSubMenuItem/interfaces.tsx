export interface ICustomSubMenuItem {
    name: string;
    shortcut?: string;
    disabled?: boolean;
    onClickMenuItem?: (name: string) => void;
    func: string;
}

export interface ISubMenuItem {
    disabled?: boolean;
    className: string;
}
