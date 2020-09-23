import styled from 'styled-components';
import { IContainer, IContainerText } from './interfaces';

export const Container = styled.div.attrs({ className: 'color-preview__container' })`
    width: 23px;
    height: 23px;
    background-color: ${(props: IContainer) => props.colorBg && props.colorBg};
    border: 1px solid #323232;

    user-select: none;
    pointer-events: none;
    ${(props: IContainer) =>
        props.disabled
            ? `opacity: 1;

    `
            : `opacity: 0.5; 
            `}
`;
export const ContainerText = styled.div.attrs({ className: 'color-preview__container' })`
    user-select: none;
    pointer-events: none;
    ${(props: IContainerText) =>
        props.disabled
            ? `opacity: 1;

    `
            : `opacity: 0.5; 
            `}
`;
