export const validate_float = (value: any) => {
    switch (value.slice(-1)) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            return value;
        default:
            return value.substring(0, value.length - 1);
    }
};
export const validate_int = (value: any) => {
    switch (value.slice(-1)) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            return value;
        default:
            return value.substring(0, value.length - 1);
    }
};
