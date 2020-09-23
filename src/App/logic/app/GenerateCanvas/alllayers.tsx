import { IStateInterface } from '../../../state';

const All_Layers = (interface_app: IStateInterface) => {
    const AllLayers = () => {
        return new Promise((resolve) => {
            // console.log('AllLayers START');

            let w = interface_app.canvas_large_width;
            let h = interface_app.canvas_large_height;

            let canvas = document.querySelector<HTMLDivElement>('.App__full-image');
            canvas!.style.width = `${w}px`;
            canvas!.style.height = `${h}px`;

            // console.log('AllLayers END');

            resolve();
        });
    };

    return [AllLayers];
};

export default All_Layers;
