import styled from 'styled-components';

import { IContainer } from './interfaces';

export const Container = styled.div.attrs<IContainer>({ className: 'Btn__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 25px;
    background-color: rgb(35, 35, 35);
    opacity: 0.7;
    user-select: none;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;
export const Icon = styled.img.attrs({ className: 'Btn__icon' })`
    display: flex;
    width: 10px;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    user-select: none;
`;
