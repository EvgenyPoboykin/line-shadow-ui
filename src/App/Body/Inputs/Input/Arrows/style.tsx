import styled from 'styled-components';
import { IContainerButton } from './interfaces';
import upIcon from './icons/up.svg';
import downIcon from './icons/down.svg';

export const ContainerButtons = styled.div.attrs({
    className: 'Arrows__container-buttons',
})`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 15px;
    height: 22px;
    user-select: none;
`;

export const ContainerButton = styled.div.attrs<IContainerButton>({
    className: 'Arrows__container-button',
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    user-select: none;

    ${(props: IContainerButton) => (props.disabled ? `cursor: default;` : `cursor: pointer`)}
`;
export const ButtonUp = styled.img.attrs({
    className: 'Arrows__button-up',
    src: upIcon,
})`
    width: 10px;
    user-select: none;
`;
export const ButtonDown = styled.img.attrs({
    className: 'Arrows__button-down',
    src: downIcon,
})`
    width: 10px;
    user-select: none;
`;
