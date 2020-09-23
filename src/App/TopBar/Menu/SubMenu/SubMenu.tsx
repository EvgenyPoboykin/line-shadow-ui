import React, { memo } from 'react';
import { ISubMenu } from './interfaces';
import SubMenu_Logic from './logic';
import { MenuItem, MenuItemContainer, SubMenuItem } from './style';

const SubMenu: React.FC<ISubMenu> = ({ children, showabout, name, focus, open, close, generator }) => {
    const { wrapperRef, openmenu, onClickItem } = SubMenu_Logic(showabout, focus, open, close, generator);

    return (
        <MenuItemContainer ref={wrapperRef}>
            <MenuItem colorBg={openmenu} id='edit' onClick={onClickItem}>
                {name}
            </MenuItem>
            <SubMenuItem open={openmenu} className={`sub-menu-item-container-${name}`}>
                {children}
            </SubMenuItem>
        </MenuItemContainer>
    );
};

export default memo(SubMenu);
