import GetDataFromImage from './openimage';
import { IStateInterface, IStateApp } from '../../../state';

const ImportImageLogic = (ipcRenderer: any, UsePictureState: any, UseInterfaceState: any, UseInterfaceDefaultState: any, UseAppState: any, inputRef: any, inputData: any, interface_app: IStateInterface) => {
    const [openImage] = GetDataFromImage(ipcRenderer, UsePictureState, UseInterfaceState, UseInterfaceDefaultState, UseAppState, inputRef, inputData, interface_app);

    const onChangeFile = (target: any) => {
        UseAppState((prev: IStateApp) => ({ ...prev, confirm_dialog_generade: true }));

        if (target) {
            let url = URL.createObjectURL(target);
            let name = target.name;
            let img = new Image();

            img.onload = () => {
                let dimensions = {
                    name,
                    url: img,
                };

                let reader = new FileReader();
                reader.readAsDataURL(target);

                reader.onload = () => {
                    ipcRenderer.send('get-data-image-electron', reader.result);
                    openImage(dimensions);
                };
            };
            img.src = url;
        }
    };

    return [onChangeFile];
};

export default ImportImageLogic;
