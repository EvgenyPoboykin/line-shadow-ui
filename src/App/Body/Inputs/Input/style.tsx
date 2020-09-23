import styled from 'styled-components';
import { ILabel } from './interfaces';
export const Container = styled.div.attrs({ className: 'InputSettings__container' })`
    display: flex;
`;

export const Label = styled.div.attrs({ className: 'InputSettings__label' })`
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    user-select: none;
    pointer-events: none;

    ${(props: ILabel) => (props.disabled ? `opacity: 1;` : `opacity: 0.5;`)}
`;

export const ContainerAll = styled.div.attrs({ className: 'InputSettings__container-all' })`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #1e1e1e;
    border: 1px solid #323232;
    user-select: none;

    ${(props: ILabel) =>
        props.disabled
            ? `opacity: 1;

            &:hover {
                border: 1px solid #494949;
            }
    `
            : `opacity: 0.5; 
            user-select: none;
            pointer-events: none;`}
`;
