import React, { memo } from 'react';

import { LogicSmallPreview } from '../../../logic';
import { Container, ContainerPreview, PreviewImage, Fragment, ContainerPreviewBG } from './style';

const SmallPreview: React.FC = () => {
    const {
        interface_app,
        picture,
        isdragready,
        fragmentCanvas,
        mouseDown,
        mouseMove,
        mouseUp,
        // onClickContainerPreview,
    } = LogicSmallPreview();

    return (
        <Container
            display={picture.image_url}
            widthCanvasPixel={interface_app.canvas_small_width}
            heightCanvasPixel={interface_app.canvas_small_height}
        >
            <ContainerPreview
                // onClick={onClickContainerPreview}
                display={picture.image_url}
                widthCanvasPixel={fragmentCanvas.w}
                heightCanvasPixel={fragmentCanvas.h}
            >
                <Fragment
                    onMouseDown={(e) => mouseDown(e)}
                    onMouseUp={isdragready ? (e) => mouseUp(e) : undefined}
                    onMouseLeave={isdragready ? (e) => mouseUp(e) : undefined}
                    onMouseMove={isdragready ? (e) => mouseMove(e) : undefined}
                ></Fragment>
            </ContainerPreview>

            <ContainerPreviewBG
                display={picture.image_url}
                widthCanvasPixel={fragmentCanvas.w}
                heightCanvasPixel={fragmentCanvas.h}
            ></ContainerPreviewBG>

            <PreviewImage src={picture.image_url && picture.image_url.src} />
        </Container>
    );
};

export default memo(SmallPreview);
