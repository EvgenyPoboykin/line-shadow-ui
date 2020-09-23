import React from 'react';
import { ContextApp, IStateInterface } from '../../../state';

const Logic = (field: string) => {
    const { UseInterfaceState, interface_value } = React.useContext(ContextApp);

    const SetValue = (value: number) => {
        if (value < interface_value[`${field}_min`]) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, [field]: interface_value[`${field}_min`] }));
        } else if (value > interface_value[`${field}_max`]) {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, [field]: interface_value[`${field}_max`] }));
        } else {
            UseInterfaceState((prevState: IStateInterface) => ({ ...prevState, [field]: value }));
        }
    };

    return {
        SetValue,
    };
};

export default Logic;
