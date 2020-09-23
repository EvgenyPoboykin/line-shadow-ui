import React from 'react';
import { ContextApp, IStateInterface } from '../../../state';

const Logic_R = () => {
    const { UseInterfaceState, interface_value } = React.useContext(ContextApp);

    const SetValue = (value: number) => {
        if (value < interface_value.rotate_min) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, rotate: interface_value.rotate_min }));
        } else if (value > interface_value.rotate_max) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, rotate: interface_value.rotate_max }));
        } else {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, rotate: value }));
        }
    };

    return {
        SetValue,
    };
};

export default Logic_R;
