export interface IProvider {
    value: any;
    children: React.ReactNode;
}

export interface IStateApp {
    show_about: boolean;
    confirm_dialog_close: boolean;
    confirm_dialog_open: boolean;
    confirm_dialog_generade: boolean;
    confirm_dialog_rerender: boolean;
    confirm_dialog_generade_process: number;
    start_save: number;
    message_confirm_dialog: string;
    save: any;
}

export interface IStateInterface {
    rotate: number;
    linethickness: number;
    linethickness_px: number;
    linespacing: number;
    linespacing_px: number;
    ppi: number;
    canvas_mm_width: number;
    canvas_mm_height: number;
    canvas_small_width: number;
    canvas_small_height: number;
    canvas_large_width: number;
    canvas_large_height: number;
    original_image_width: number;
    original_image_height: number;
    focus: boolean;
    lock: boolean;
    cmyk_c: number;
    cmyk_m: number;
    cmyk_y: number;
    cmyk_k: number;
}

export interface IStatePicture {
    image_url: any;
    image_name: string;
    image_size: string;
    image_orientation: string;
    image_format: any;
    image_aspect: any;
    image_input_color_mode: string;
    image_output_color_mode: string;
    image_gptn: number;
    image_degree: number;
    image_forground_layer: boolean;
    image_background_layer: boolean;
    image_icc: any;
    image_compress: string;
}

export interface IStateInterfaceValue {
    max: number;
    min: number;
    rotate_min: number;
    rotate_max: number;
    rotate_metric: string;
    rotate_step: number;
    rotate_maxlength: number;
    linethickness_min: number;
    linethickness_max: number;
    linethickness_metric: string;
    linethickness_step: number;
    linethickness_maxlength: number;
    linespacing_min: number;
    linespacing_max: number;
    linespacing_metric: string;
    linespacing_step: number;
    linespacing_maxlength: number;
    canvas_mm_width_min: number;
    canvas_mm_width_max: number;
    canvas_mm_width_metric: string;
    canvas_mm_width_step: number;
    canvas_mm_width_maxlength: number;
    canvas_mm_height_min: number;
    canvas_mm_height_max: number;
    canvas_mm_height_metric: string;
    canvas_mm_height_step: number;
    canvas_mm_height_maxlength: number;
    ppi_min: number;
    ppi_max: number;
    ppi_metric: string;
    ppi_step: number;
    ppi_maxlength: number;
    cmyk_c_min: number;
    cmyk_c_max: number;
    cmyk_c_metric: string;
    cmyk_c_step: number;
    cmyk_c_maxlength: number;
    cmyk_m_min: number;
    cmyk_m_max: number;
    cmyk_m_metric: string;
    cmyk_m_step: number;
    cmyk_m_maxlength: number;
    cmyk_y_min: number;
    cmyk_y_max: number;
    cmyk_y_metric: string;
    cmyk_y_step: number;
    cmyk_y_maxlength: number;
    cmyk_k_min: number;
    cmyk_k_max: number;
    cmyk_k_metric: string;
    cmyk_k_step: number;
    cmyk_k_maxlength: number;
}
