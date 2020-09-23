import cmyk2rgb from '../../../Body/cmyk2rgb';
import inRad from './inrad';
import { IStateInterface, IStatePicture } from '../../../state';

const Draw_Grid = (interface_app: IStateInterface, picture: IStatePicture) => {
    const cmyk = cmyk2rgb(interface_app.cmyk_c, interface_app.cmyk_m, interface_app.cmyk_y, interface_app.cmyk_k);

    const DrawGrid = (ctx: any, rot: number, mask: string) => {
        if (picture.image_url !== null) {
            // канвас размеры
            const canvas_width = interface_app.canvas_large_width;
            const canvas_height = interface_app.canvas_large_height;
            // размеры картинки
            const image_width = interface_app.original_image_width;
            const image_height = interface_app.original_image_height;

            // длинна линии
            const line_width = Math.sqrt(Math.pow(canvas_width, 2) + Math.pow(canvas_height, 2)) + 200;
            // высота линии
            const line_height = interface_app.linethickness_px;
            // расстояние между линиями
            const line_padding = interface_app.linespacing_px;

            // количество линий в высоту
            const lines_count = line_width / (line_height + line_padding);

            // сохранение настроек
            ctx.save();
            // положение контейнера гридов
            ctx.translate(canvas_width / 2, canvas_height / 2);
            // вращение контейнера гридов
            ctx.rotate(inRad(rot));
            // цвет линии
            ctx.fillStyle = `rgb(${cmyk.r},${cmyk.g}, ${cmyk.b})`;

            for (var i = 0; i < lines_count; i++) {
                // x позиция линии
                let xP = -line_width / 2;
                // У позиция линии
                let yP = -line_width / 2 + (line_height + line_padding) * i;
                // линия
                ctx.fillRect(xP, yP, line_width, line_height);
            }

            // отмена вращения гридов
            ctx.restore();

            // маска
            ctx.globalCompositeOperation = mask;
            // картинка маски пнг
            ctx.drawImage(picture.image_url, (canvas_width - image_width) / 2, (canvas_height - image_height) / 2, image_width, image_height);
            // вращение картинки против вращения грида
            ctx.rotate(inRad(-rot));

            // ctx.globalCompositeOperation = 'destination-over';
        }
    };

    return [DrawGrid];
};

export default Draw_Grid;
