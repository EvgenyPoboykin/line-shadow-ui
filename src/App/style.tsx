import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'App__container' })`
    display: grid;
    flex-direction: column;
    /* grid-template-columns: 1fr; */
    grid-template-rows: 50px 1fr;
    min-width: 1200px;
    width: 100%;
    min-height: 900px;
    height: 100%;
    /* width: 100%;
    height: 100%; */
`;

export const Input = styled.input.attrs({ type: 'file', id: 'file-input', className: 'OpenFile__input-file', accept: 'image/x-png, image/png, image/svg+xml', multiple: false })`
    display: none;
`;
export const ProtectorFileDiv = styled.div.attrs({ className: 'App__protector' })`
    width: 0px;
    height: 0px;
    overflow: hidden;
`;
export const FullImage = styled.div.attrs({ className: 'App__full-image' })`
    position: relative;
`;
export const ForGroundLayer = styled.canvas.attrs({ className: 'App__ForGroundLayer' })`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
`;
export const BackGroundLayer = styled.canvas.attrs({ className: 'App__BackGroundLayer' })`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;
export const FillBackGroundLayer = styled.canvas.attrs({ className: 'App__FillBackGroundLayer' })`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
`;
