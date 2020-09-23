import Draw_Grid from './draw_grid';
import { IStateInterface, IStatePicture } from '../../../state';

const Back_Ground_Layer = (interface_app: IStateInterface, picture: IStatePicture) => {
    const [DrawGrid] = Draw_Grid(interface_app, picture);

    const BackGroundLayer = () => {
        return new Promise((resolve) => {
            // console.log('BackGroundLayer START');

            let canvas = document.querySelector<HTMLCanvasElement>('.App__BackGroundLayer');
            var ctx = canvas!.getContext('2d');

            let w = interface_app.canvas_large_width;
            let h = interface_app.canvas_large_height;

            canvas!.width = w;
            canvas!.height = h;

            if (picture.image_background_layer) {
                ctx!.save();
                DrawGrid(ctx, interface_app.rotate + 90, 'destination-in');
                ctx!.restore();
            }

            // console.log('BackGroundLayer END ');

            resolve();
        });
    };

    return [BackGroundLayer];
};

export default Back_Ground_Layer;
