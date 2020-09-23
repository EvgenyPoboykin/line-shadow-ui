import styled from 'styled-components';

import { ISubMenuItem } from './interfaces';

import { grey_50, grey_30, grey_45 } from '../../../global';

export const ContainerItem = styled.div.attrs({ className: 'CustomSubMenuItem__container' })`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 12px;
    font-weight: 400px;
    color: #aeaeae;
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #141414;
    /* border-top: 1px solid ${grey_30}; */
    background-color: ${grey_45};
`;
export const SubMenuItem = styled.div.attrs<ISubMenuItem>({ className: 'CustomSubMenuItem__item' })`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0px 19px;
    background-color: ${grey_50};

    ${(props: ISubMenuItem) => (props.disabled ? `color: #646464; ` : `color: #aeaeae; cursor: pointer; &:hover { background-color: #323232;`)};
`;
export const MenuName = styled.div.attrs({ className: 'CustomSubMenuItem__name' })`
    user-select: none;
    pointer-events: none;
`;
export const MenuShortCut = styled.div.attrs({ className: 'CustomSubMenuItem__shortcut' })`
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
`;
