import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs<IContainer>({ className: 'DialogWin__container' })<IContainer>`
    position: absolute;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 100;
    pointer-events: none;
`;
export const Content = styled.div.attrs({ className: 'DialogWin__content' })`
    display: flex;
    width: 90%;
    height: 90%;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;
