import React from 'react';
import { ContextApp, convert_mm_to_px, original_dimention, IStateInterface, IStateInterfaceValue } from '../../../state';

const Logic_P = () => {
    const { interface_app, UseInterfaceState, interface_value, picture, UseInterfaceDefaultState } = React.useContext(ContextApp);

    const map = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    };

    // Edit ppi
    const SetValue = (value: number) => {
        let width = convert_mm_to_px(interface_app.canvas_mm_width, value);
        let height = convert_mm_to_px(interface_app.canvas_mm_height, value);

        let ORIGINAL = original_dimention(width, height, picture.image_degree, picture.image_aspect);

        UseInterfaceState((prevState: IStateInterface) => ({
            ...prevState,
            ppi: value,
            canvas_large_width: width,
            canvas_large_height: height,
            original_image_width: ORIGINAL.w,
            original_image_height: ORIGINAL.h,
            linethickness_px: convert_mm_to_px(interface_app.linethickness, value),
            linespacing_px: convert_mm_to_px(interface_app.linespacing, value),
        }));

        let range = map(value, interface_value.ppi_min, interface_value.ppi_max, interface_value.max, interface_value.min);

        UseInterfaceDefaultState((prev: IStateInterfaceValue) => ({ ...prev, canvas_mm_width_max: range, canvas_mm_height_max: range }));
    };

    return {
        SetValue,
    };
};

export default Logic_P;
