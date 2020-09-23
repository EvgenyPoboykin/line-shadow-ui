export interface IInput {
    title: string;
    fieldname: string;
    Edit?: (value: number) => void;
    float?: boolean;
}

export interface ILabel {
    disabled?: boolean;
}
