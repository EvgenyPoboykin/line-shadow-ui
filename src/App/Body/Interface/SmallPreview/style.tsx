import styled from 'styled-components';
import { IContainer, IFragment } from './interfaces';

export const Container = styled.div.attrs({ className: 'SmallPreview__container' })<IContainer>`
    display: ${(props) => (props.display !== null ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.widthCanvasPixel && `${props.widthCanvasPixel}px;`};
    height: ${(props) => props.heightCanvasPixel && `${props.heightCanvasPixel}px;`};
    position: relative;
    overflow: hidden;
    user-select: none;
`;
export const ContainerPreview = styled.div.attrs({ className: 'SmallPreview__content' })<IContainer>`
    display: ${(props) => (props.display !== null ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.widthCanvasPixel && `${props.widthCanvasPixel}px;`};
    height: ${(props) => props.heightCanvasPixel && `${props.heightCanvasPixel}px;`};

    position: relative;

    user-select: none;
    z-index: 2;
`;
export const ContainerPreviewBG = styled.div.attrs({ className: 'SmallPreview__content-bg' })<IContainer>`
    display: ${(props) => (props.display !== null ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.widthCanvasPixel && `${props.widthCanvasPixel}px;`};
    height: ${(props) => props.heightCanvasPixel && `${props.heightCanvasPixel}px;`};
    position: absolute;
    overflow: hidden;
    user-select: none;
    z-index: 1;
    border: 1px dashed #00f5a5;
`;
export const PreviewImage = styled.img.attrs({ className: 'SmallPreview__image' })`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(75, 75, 75);
    user-select: none;
    z-index: 0;
    position: absolute;
`;

export const Fragment = styled.div.attrs({ className: 'SmallPreview__fragment' })`
    position: absolute;
    width: ${(props: IFragment) => (props.widthCanvasPixel ? `${props.widthCanvasPixel}px;` : '100%')};
    height: ${(props: IFragment) => (props.heightCanvasPixel ? `${props.heightCanvasPixel}px;` : '100%')};
    border: 1px dashed #e1640f;
    z-index: 2;
    user-select: none;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    &:hover {
        border: 2px dashed #fd8b3e;
    }
`;
