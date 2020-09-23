export interface IInput {
    widthCharacter?: number;
    disabledInput?: boolean;
    className?: string;
}

export interface IInputField {
    value?: number | string;
    fieldname?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    onKeyPress: (e: React.KeyboardEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}
