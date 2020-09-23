import React, { useState } from 'react';
import { validate_float, validate_int } from '../../../state';

const Input_Logic = (fieldname?: string, Edit?: (value: number) => void, float?: boolean) => {
    const [newValue, UseNewValue] = useState<any>(null);

    const onContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const onBlur = () => {
        if (newValue !== null) {
            UseNewValue(null);
        }
    };

    const onKeyPress = (e: React.KeyboardEvent) => {
        if (newValue !== null) {
            if (e.key === 'Enter') {
                UseNewValue(null);
            }
        }
    };
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (newValue !== null) {
            if (e.key === 'Tab') {
                UseNewValue(null);
            } else if (e.key === 'Escape') {
                UseNewValue(null);
            }
        }
    };

    const onClickButtonUp = () => {
        if (float) {
        } else {
        }
    };
    const onClickButtonDown = () => {
        if (float) {
        } else {
        }
    };

    const onChangeInputInt = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.target.value;

        let newValueValid = validate_int(value);

        UseNewValue(parseInt(newValueValid));
    };
    const onChangeInputFloat = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.target.value;

        let newValueValid = validate_float(value);

        UseNewValue(parseFloat(newValueValid));
    };

    let value = '';

    return {
        value,
        onBlur,
        onKeyPress,
        onKeyDown,
        onClickButtonUp,
        onContextMenu,
        onChangeInputFloat,
        onChangeInputInt,
        onClickButtonDown,
    };
};

export default Input_Logic;
