import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Menu__container' })`
    display: grid;
    grid-template-columns: repeat(2, 60px) 1fr;
    height: 100%;
    justify-content: flex-start;
    grid-gap: 5px;
    user-select: none;
`;

export const BufferContainer = styled.div.attrs({ className: 'Menu__buffer-container' })`
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-app-region: drag;
`;
