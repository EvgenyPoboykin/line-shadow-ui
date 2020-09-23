import styled from 'styled-components';

import { IMenuItem, ISubMenuItem } from './interfaces';

import { grey_50, text_225 } from '../../../global';

export const MenuItemContainer = styled.div.attrs({ className: 'SubMenu__container' })`
    display: flex;
    width: 60px;
    height: 100%;
    position: relative;
`;
export const MenuItem = styled.div.attrs({ className: 'SubMenu__item' })`
    display: flex;
    width: 60px;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    color: #e1e1e1;
    opacity: 0.8;

    ${(props: IMenuItem) =>
        props.colorBg
            ? `background-color: ${grey_50};`
            : `&:hover {
        opacity: 1;
    }`}

    transition: all 300ms ease-in-out
`;
export const SubMenuItem = styled.div.attrs<ISubMenuItem>({ className: 'SubMenu__items-container' })`
    position: absolute;
    display: ${(props: ISubMenuItem) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    color: ${text_225};
    top: 50px;
    left: 0;
    z-index: 200;
    width: 236px;
`;
