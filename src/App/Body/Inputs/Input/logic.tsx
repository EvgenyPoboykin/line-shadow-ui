import React, { useState, useContext } from 'react';
import { ContextApp, validate_float, validate_int, IStateInterface } from '../../../state';

const Input_Logic = (fieldname: string, Edit: (value: number) => void, float?: boolean) => {
    const { picture, interface_app, interface_default, interface_value, UseInterfaceState } = useContext(ContextApp);

    const [newValue, UseNewValue] = useState<any>(null);

    const onContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        UseInterfaceState((prev: IStateInterface) => ({ ...prev, [fieldname]: interface_default[fieldname] }));
    };

    const SetValue = () => {
        if (newValue < interface_value[`${fieldname}_min`]) {
            Edit(interface_value[`${fieldname}_min`]);
        } else if (newValue > interface_value[`${fieldname}_max`]) {
            Edit(interface_value[`${fieldname}_max`]);
        } else {
            Edit(newValue);
        }
    };

    const onBlur = () => {
        if (newValue !== null) {
            SetValue();
            UseNewValue(null);
        }
    };

    const onKeyPress = (e: React.KeyboardEvent) => {
        if (newValue !== null) {
            if (e.key === 'Enter') {
                SetValue();
                UseNewValue(null);
            }
        }
    };
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (newValue !== null) {
            if (e.key === 'Tab') {
                SetValue();
                UseNewValue(null);
            } else if (e.key === 'Escape') {
                UseNewValue(null);
            }
        }
    };

    const onClickButtonUp = () => {
        if (float) {
            let value = parseFloat((interface_app[fieldname] + interface_value[`${fieldname}_step`]).toFixed(1));
            Edit(value);
        } else {
            let value = interface_app[fieldname] + interface_value[`${fieldname}_step`];
            Edit(value);
        }
    };
    const onClickButtonDown = () => {
        if (float) {
            let value = parseFloat((interface_app[fieldname] - interface_value[`${fieldname}_step`]).toFixed(1));
            Edit(value);
        } else {
            let value = interface_app[fieldname] - interface_value[`${fieldname}_step`];
            Edit(value);
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

    let value = newValue !== null ? newValue : interface_app[fieldname];

    return {
        value,
        picture,
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
