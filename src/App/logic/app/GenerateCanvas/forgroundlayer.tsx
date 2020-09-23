import Draw_Grid from './draw_grid';
import { IStateInterface, IStatePicture } from '../../../state';

const For_Ground_Layer = (interface_app: IStateInterface, picture: IStatePicture) => {
    const [DrawGrid] = Draw_Grid(interface_app, picture);

    const ForGroundLayer = () => {
        return new Promise((resolve) => {
            // console.log('ForGroundLayer START');
            let canvas = document.querySelector<HTMLCanvasElement>('.App__ForGroundLayer');
            var ctx = canvas!.getContext('2d');

            let w = interface_app.canvas_large_width;
            let h = interface_app.canvas_large_height;

            canvas!.width = w;
            canvas!.height = h;

            if (picture.image_forground_layer) {
                ctx!.save();
                DrawGrid(ctx, interface_app.rotate, 'destination-out');
                ctx!.restore();
            }
            // console.log('ForGroundLayer END');

            resolve();
        });
    };

    return [ForGroundLayer];
};

export default For_Ground_Layer;
