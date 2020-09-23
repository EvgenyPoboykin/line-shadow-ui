import html2canvas from 'html2canvas';
import { IStateInterface, IStateApp, IStatePicture } from '../../../state';

const { ipcRenderer } = window.require('electron');

const Convert_To_Image = (interface_app: IStateInterface, app: IStateApp, picture: IStatePicture) => {
    const ConvertToImage = (type: string) => {
        // console.log('ConvertToImage START');

        const full = document.querySelector<HTMLDivElement>('.App__full-image');

        html2canvas(full!).then((canvas) => {
            let fullLayer = canvas.toDataURL('image/bmp');

            let ppi = interface_app.ppi;
            let name = picture.image_name;
            let count = app.start_save;
            let filePath = app.save;

            ipcRenderer.send('save-file', fullLayer, ppi, name, picture.image_compress, count, filePath, type);
        });

        // console.log('ConvertToImage END');
    };

    return [ConvertToImage];
};

export default Convert_To_Image;
