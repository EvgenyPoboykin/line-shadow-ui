import { scale_size, orientation, convert_mm_to_px, convert_px_to_mm, IStatePicture, IStateInterface, IStateApp } from '../../../state';

const GetDataFromImage = (ipcRenderer: any, UsePictureState: any, UseInterfaceState: any, UseInterfaceDefaultState: any, UseAppState: any, inputRef: any, inputData: any, interface_app: IStateInterface) => {
    // const { UsePictureState, UseInterfaceState, UseInterfaceDefaultState, UseAppState, inputRef, inputData, interface_app } = useContext(ContextApp);

    const openImage = (data: any) => {
        ipcRenderer.on('get-data-image-react', (e: any, ppi: number, width: number, height: number, format: string, space: string, icc: any) => {
            let colorMode = space.toString();
            // размеры маленького превью
            let CS = scale_size(width, height);

            let c = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            let sin = height / c;
            let degree = Math.asin(sin) * (180 / Math.PI);

            // Picture State
            UsePictureState((prev: IStatePicture) => ({
                ...prev,
                image_name: data.name,
                image_size: `${width} x ${height} pixels`,
                image_url: data.url,
                image_format: format,
                image_orientation: orientation(width, height),
                image_aspect: width / height,
                image_gptn: c,
                image_degree: degree,
                image_icc: icc,
                image_input_color_mode: colorMode === 'srgb' ? colorMode.toUpperCase().charAt(0).toLowerCase() + colorMode.toUpperCase().slice(1) : colorMode.toUpperCase(),
            }));

            // изменение Interface State
            let newData: IStateInterface = {
                ...interface_app,
                canvas_mm_width: convert_px_to_mm(width, ppi),
                canvas_mm_height: convert_px_to_mm(height, ppi),
                canvas_large_width: width,
                canvas_large_height: height,
                canvas_small_width: CS.width,
                canvas_small_height: CS.height,
                original_image_width: width,
                original_image_height: height,
                linethickness_px: convert_mm_to_px(interface_app.linethickness, ppi),
                linespacing_px: convert_mm_to_px(interface_app.linespacing, ppi),
            };

            // замена в Interface_State и Interface_Default_State
            UseInterfaceState(newData);
            UseInterfaceDefaultState(newData);

            // очистка value input
            inputRef.current.value = '';

            inputData.current.readOnly = false;
            UseAppState((prev: IStateApp) => ({ ...prev, confirm_dialog_generade: false, confirm_dialog_generade_process: 0 }));
        });
    };

    return [openImage];
};

export default GetDataFromImage;
