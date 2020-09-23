import React from 'react';
import { ContextApp, convert_mm_to_px, original_dimention, IStateInterface } from '../../../state';

const Logic_CH = () => {
    const { interface_app, picture, UseInterfaceState } = React.useContext(ContextApp);

    const SetValue = (value: number) => {
        let aspect = picture.image_aspect;

        let height = convert_mm_to_px(value, interface_app.ppi);
        let ORIGINAL = original_dimention(interface_app.canvas_large_width, height, picture.image_degree, aspect);

        UseInterfaceState((prevState: IStateInterface) => ({
            ...prevState,
            canvas_mm_height: value,
            canvas_large_height: height,
            original_image_width: ORIGINAL.w,
            original_image_height: ORIGINAL.h,
        }));
    };

    return {
        SetValue,
    };
};

export default Logic_CH;
