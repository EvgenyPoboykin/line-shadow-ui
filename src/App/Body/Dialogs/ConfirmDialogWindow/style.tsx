import styled from 'styled-components';
import icon from './icons/icon_error.svg';

export const ContainerDialogContainer = styled.div.attrs({ className: 'ConfirmDialogWindow__dialog-container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 480px;
    height: 150px;
    position: absolute;
    user-select: none;
    background-color: #323232;
`;

export const IconError = styled.img.attrs({ className: 'ConfirmDialogWindow__icon-error', src: icon })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    position: absolute;
    top: -15px;
    user-select: none;
    pointer-events: none;
`;
export const TextError = styled.div.attrs({ className: 'ConfirmDialogWindow__text-error' })`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    color: #e1e1e1;
    margin-top: 45px;
`;
export const DialogBtns = styled.div.attrs({ className: 'ConfirmDialogWindow__buttons-container' })`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #e1e1e1;
    width: 70%;
    height: 100%;
`;
export const DialogBtn = styled.button.attrs({ className: 'ConfirmDialogWindow__button' })`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #e1e1e1;
    width: 100px;
    height: 50px;
    border-radius: 25px;
    background-color: #2d2d2d;
    pointer-events: all;
    border: 1px dashed #969696;
    cursor: pointer;

    &:hover {
        background-color: #4a4a4a;
    }
`;
