import styled from 'styled-components';
import { IContainer } from './interfaces';
import { grey_50, text_175, grey_45 } from '../../../global';

export const Container = styled.div.attrs({ className: 'Save__container' })`
    display: flex;
    width: 100%;
    height: 105px;
    justify-content: center;
    align-items: center;
    user-select: none;
    ${(props: IContainer) => (props.disabled ? `opacity: 0.5;  user-select: none; pointer-events: none;` : `opacity: 1;`)}
`;
export const SaveButton = styled.button.attrs({ className: 'Save__button' })`
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border-radius: 25px;

    background-color: ${grey_45};
    color: #e1e1e1;
    border: 1px dashed ${text_175};
    user-select: none;
    cursor: pointer;
    &:hover {
        background-color: ${grey_50};
    }
`;
