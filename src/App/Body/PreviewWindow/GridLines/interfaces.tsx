export interface IGridLines {
    two?: boolean | undefined;
    forground?: boolean | undefined;
    name: string;
}

export interface IContainer {
    urlMask: string;
    widthcanvaspixeloriginal: number;
    heightcanvaspixeloriginal: number;
    forground?: boolean;
    className: string;
}
export interface IGridContainer {
    deg: number;
    widthLines: number;
    marginLeft: number;
    marginTop: number;
}
