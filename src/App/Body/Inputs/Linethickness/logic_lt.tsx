import React from 'react';
import { ContextApp, convert_mm_to_px, IStateInterface } from '../../../state';

const Logic_LT = () => {
    const { interface_app, UseInterfaceState, interface_value } = React.useContext(ContextApp);

    const SetValue = (value: number) => {
        if (value < interface_value.linethickness_min) {
            UseInterfaceState((prevState: IStateInterface) => ({
                ...prevState,
                linethickness: interface_value.linethickness_min,
                linethickness_px: convert_mm_to_px(interface_value.linethickness_min, interface_app.ppi),
            }));
        } else if (value > interface_value.linethickness_max) {
            UseInterfaceState((prevState: IStateInterface) => ({
                ...prevState,
                linethickness: interface_value.linethickness_max,
                linethickness_px: convert_mm_to_px(interface_value.linethickness_max, interface_app.ppi),
            }));
        } else {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, linethickness: value, linethickness_px: convert_mm_to_px(value, interface_app.ppi) }));
        }
    };

    return {
        SetValue,
    };
};

export default Logic_LT;
