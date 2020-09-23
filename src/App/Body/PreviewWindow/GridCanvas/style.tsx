import styled from 'styled-components';
import { IContainer } from './interfaces';

export const CanvasPicture = styled.div.attrs({ className: 'Canvas__container' })<IContainer>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    z-index: 0;
    ${(props) => props.widthCanvasPixel && `width: ${props.widthCanvasPixel}px ;height: ${props.heightCanvasPixel}px;`}

    /* pointer-events: none; */
    user-select: none;
    overflow: hidden;
    opacity: 0.7;

    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
`;
export const Picture = styled.div.attrs({ className: 'Image__content' })<IContainer>`
    ${(props) => props.widthCanvasPixel && `width: ${props.widthCanvasPixel}px ;height: ${props.heightCanvasPixel}px;`}
    opacity: 1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;
