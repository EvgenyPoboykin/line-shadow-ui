import styled from 'styled-components';
import { IContainer } from './interfaces';

import { text_100, text_175, grey_50, grey_45 } from '../../../global';

export const Container = styled.div.attrs({ className: 'OpenFile__container' })`
    position: relative;
    display: ${(props: IContainer) => (props.display === null ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
    z-index: 3;
`;

export const ContainerImage = styled.div.attrs({ className: 'OpenFile__content' })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    user-select: none;
    z-index: 3;
`;
export const Title = styled.div.attrs({ className: 'OpenFile__title' })`
    font-size: 20px;
    font-weight: bold;
    color: ${text_100};
    user-select: none;
`;
export const Desc = styled.div.attrs({ className: 'OpenFile__description' })`
    font-size: 12px;
    font-weight: 400;
    color: ${text_100};
    padding-top: 5px;
    user-select: none;
`;
export const OpenButtonContainer = styled.div.attrs({ className: 'OpenFile__btn-container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 80px;
    user-select: none;
`;
export const OpenButton = styled.label.attrs({ htmlFor: 'file-input', className: 'OpenFile__btn' })`
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
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: ${grey_50};
    }
`;
