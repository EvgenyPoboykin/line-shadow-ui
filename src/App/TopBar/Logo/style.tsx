import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Logo__container' })`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-app-region: drag;
`;
export const Virsion = styled.div.attrs({ className: 'Logo__version' })`
    display: flex;
    width: 100%;
    height: 100%;
    user-select: none;
    font-size: 12px;
    font-weight: 500;
    align-items: center;
    padding-left: 10px;
    padding-top: 15px;
`;
export const BufferContainer = styled.div.attrs({ className: 'Logo__buffer-container' })`
    width: 100%;
    height: 100%;
    user-select: none;
`;

export const Logotype = styled.img.attrs({ className: 'Logo__logotype' })`
    pointer-events: none;
    user-select: none;
`;
