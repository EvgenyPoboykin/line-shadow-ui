export interface ISubMenu {
    children: React.ReactNode;
    showabout?: boolean;
    name?: string;
    focus?: boolean;
    open?: boolean;
    close?: boolean;
    generator?: boolean;
}

export interface IMenuItem {
    colorBg: boolean;
}
export interface ISubMenuItem {
    open: boolean;
    className: string;
}
