import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Controls__container' })`
    display: grid;
    grid-template-columns: repeat(3, 35px);
    grid-template-rows: 25px;
    grid-gap: 5px;
    padding-right: 10px;
    position: absolute;
    top: 0;
    right: 0;
    user-select: none;
    pointer-events: all;
    -webkit-app-region: no-drag;
`;
