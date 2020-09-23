import { IStatePicture } from './interfaces';

const StatePicture: IStatePicture = {
    image_url: null,
    image_name: '',
    image_size: '',
    image_orientation: '',
    image_format: null,
    image_aspect: null,
    image_input_color_mode: 'RGB',
    image_output_color_mode: 'CMYK',
    image_gptn: 0,
    image_degree: 0,
    image_forground_layer: true,
    image_background_layer: true,
    image_icc: null,
    image_compress: 'lzw',
};

export default StatePicture;
