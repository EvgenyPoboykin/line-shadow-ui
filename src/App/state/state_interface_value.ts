import { IStateInterfaceValue } from './interfaces';

const StateInterfaceValue: IStateInterfaceValue = {
    max: 30000,
    min: 10,
    rotate_min: -360,
    rotate_max: 360,
    rotate_metric: ' °',
    rotate_step: 1,
    rotate_maxlength: 4,

    linethickness_min: 0.1,
    linethickness_max: 10.0,
    linethickness_metric: ' mm',
    linethickness_step: 0.1,
    linethickness_maxlength: 3,

    linespacing_min: 0.1,
    linespacing_max: 10.0,
    linespacing_metric: ' mm',
    linespacing_step: 0.1,
    linespacing_maxlength: 3,

    canvas_mm_width_min: 10,
    canvas_mm_width_max: 30000,
    canvas_mm_width_metric: ' mm',
    canvas_mm_width_step: 1,
    canvas_mm_width_maxlength: 5,

    canvas_mm_height_min: 10,
    canvas_mm_height_max: 30000,
    canvas_mm_height_metric: ' mm',
    canvas_mm_height_step: 1,
    canvas_mm_height_maxlength: 5,

    ppi_min: 36,
    ppi_max: 5600,
    ppi_metric: ' ppi',
    ppi_step: 1,
    ppi_maxlength: 4,

    cmyk_c_min: 0,
    cmyk_c_max: 100,
    cmyk_c_metric: ' %',
    cmyk_c_step: 1,
    cmyk_c_maxlength: 3,

    cmyk_m_min: 0,
    cmyk_m_max: 100,
    cmyk_m_metric: ' %',
    cmyk_m_step: 1,
    cmyk_m_maxlength: 3,

    cmyk_y_min: 0,
    cmyk_y_max: 100,
    cmyk_y_metric: ' %',
    cmyk_y_step: 1,
    cmyk_y_maxlength: 3,

    cmyk_k_min: 0,
    cmyk_k_max: 100,
    cmyk_k_metric: ' %',
    cmyk_k_step: 1,
    cmyk_k_maxlength: 3,
};

export default StateInterfaceValue;
