import { IStateInterface } from './interfaces';

const StateInterfaceDefault: IStateInterface = {
    rotate: 0,
    linethickness: 0.5,
    linethickness_px: 1,
    linespacing: 0.5,
    linespacing_px: 1,

    ppi: 72,

    canvas_mm_width: 0,
    canvas_mm_height: 0,

    canvas_small_width: 0,
    canvas_small_height: 0,

    canvas_large_width: 0,
    canvas_large_height: 0,

    original_image_width: 0,
    original_image_height: 0,

    focus: false,

    lock: false,
    cmyk_c: 0,
    cmyk_m: 0,
    cmyk_y: 0,
    cmyk_k: 100,
};

export default StateInterfaceDefault;
