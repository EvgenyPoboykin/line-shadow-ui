import React from 'react';
import { ContextApp, convert_mm_to_px, IStateInterface } from '../../../state';

const Logic_LS = () => {
    const { interface_app, UseInterfaceState, interface_value } = React.useContext(ContextApp);

    const SetValue = (value: number) => {
        if (value < interface_value.linespacing_min) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, linespacing: interface_value.linespacing_min, linespacing_px: convert_mm_to_px(interface_value.linespacing_min, interface_app.ppi) }));
        } else if (value > interface_value.linespacing_max) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, linespacing: interface_value.linespacing_max, linespacing_px: convert_mm_to_px(interface_value.linespacing_max, interface_app.ppi) }));
        } else {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, linespacing: value, linespacing_px: convert_mm_to_px(value, interface_app.ppi) }));
        }
    };

    return {
        SetValue,
    };
};

export default Logic_LS;
