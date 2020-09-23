import React, { memo } from 'react';

import { Picture, CanvasPicture } from './style';
import GridLines from '../GridLines';

import { LogicLargePreview } from '../../../logic';

const GridCanvas: React.FC = () => {
    const { interface_app, mouseDown, mouseMove, mouseUp } = LogicLargePreview();

    return (
        <CanvasPicture widthCanvasPixel={interface_app.canvas_large_width} heightCanvasPixel={interface_app.canvas_large_height} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
            <Picture widthCanvasPixel={interface_app.original_Picture_width} heightCanvasPixel={interface_app.original_image_height}>
                <GridLines forground name='Image__forground' />
                <GridLines two name='Image__background' />
            </Picture>
        </CanvasPicture>
    );
};

export default memo(GridCanvas);
