import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'FragmentCanvasFrame__container', id: 'FragmentCanvasFrame__container' })`
    position: absolute;
    width: 98%;
    height: 98%;
    border: 1px dashed rgb(255, 100, 16);
    z-index: 1;
    pointer-events: none;
    user-select: none;
    cursor: default;
`;
