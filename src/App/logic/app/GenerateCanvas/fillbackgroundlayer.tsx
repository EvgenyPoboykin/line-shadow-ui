import { IStateInterface } from '../../../state';

const Fiil_Back_Ground_Layer = (interface_app: IStateInterface) => {
    const FillBackGroundLayer = () => {
        return new Promise((resolve) => {
            // console.log('FillBackGroundLayer START');

            let canvas = document.querySelector<HTMLCanvasElement>('.App__FillBackGroundLayer');
            var ctx = canvas!.getContext('2d');

            let w = interface_app.canvas_large_width;
            let h = interface_app.canvas_large_height;

            canvas!.width = w;
            canvas!.height = h;

            ctx!.fillStyle = '#fff';
            ctx!.fillRect(0, 0, w, h);

            // console.log('FillBackGroundLayer END');

            resolve();
        });
    };

    return [FillBackGroundLayer];
};

export default Fiil_Back_Ground_Layer;
