import React, { memo } from 'react';
import { ICustomSubMenuItem } from './interfaces';
import { SubMenuItem, MenuName, MenuShortCut, ContainerItem } from './style';

const CustomSubMenuItem: React.FC<ICustomSubMenuItem> = ({ name, shortcut, disabled, onClickMenuItem, func }) => (
    <ContainerItem>
        <SubMenuItem disabled={disabled} className={func}>
            <MenuName>{name}</MenuName>
            {shortcut ? <MenuShortCut>{shortcut}</MenuShortCut> : null}
        </SubMenuItem>
    </ContainerItem>
);

export default memo(CustomSubMenuItem);
