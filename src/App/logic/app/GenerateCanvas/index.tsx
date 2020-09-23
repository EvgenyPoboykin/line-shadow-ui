import For_Ground_Layer from './forgroundlayer';
import Back_Ground_Layer from './backgroundlayer';
import Fiil_Back_Ground_Layer from './fillbackgroundlayer';
import All_Layers from './alllayers';
import Convert_To_Image from './converttoimage';
import { IStateApp, IStateInterface, IStatePicture } from '../../../state';

const CanvasLogic = (app: IStateApp, interface_app: IStateInterface, picture: IStatePicture) => {
    const [ForGroundLayer] = For_Ground_Layer(interface_app, picture);
    const [BackGroundLayer] = Back_Ground_Layer(interface_app, picture);
    const [FillBackGroundLayer] = Fiil_Back_Ground_Layer(interface_app);
    const [AllLayers] = All_Layers(interface_app);
    const [ConvertToImage] = Convert_To_Image(interface_app, app, picture);

    const ConvertGridstoTiff = (type: string) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                ForGroundLayer()
                    .then(() => BackGroundLayer())
                    .then(() => FillBackGroundLayer())
                    .then(() => AllLayers())
                    .then(() => ConvertToImage(type));

                resolve();
            }, 30);
        });
    };

    return [ConvertGridstoTiff];
};

export default CanvasLogic;
