import React, { memo } from 'react';
import { Container, BufferContainer } from './style';
import CustomSubMenuItem from './CustomSubMenuItem';
import SubMenu from './SubMenu';

const Menu: React.FC = () => {
    return (
        <Container>
            <SubMenu name='File'>
                <CustomSubMenuItem name='Open' shortcut='Ctrl + O' disabled={false} func={'open-from-top-menu'} />
                <CustomSubMenuItem name='Save' shortcut='Ctrl + S' func={'save-from-top-menu'} />
                <CustomSubMenuItem name='Save as' shortcut='Ctrl + Shift + S' func={'save-as-from-top-menu'} />
                <CustomSubMenuItem name='Exit' shortcut='Ctrl + Q' disabled={false} func={'quit-from-top-menu'} />
            </SubMenu>

            <SubMenu name='Edit'>
                <CustomSubMenuItem name='About' disabled={false} func={'adout-from-top-menu'} />
                <CustomSubMenuItem name='View Manual' disabled={true} func={'manual-from-top-menu'} />
                <CustomSubMenuItem name='Check for Updates' disabled={true} func={'update-from-top-menu'} />
                <CustomSubMenuItem name='Software Licenses' disabled={true} func={'licenses-from-top-menu'} />
            </SubMenu>
            <BufferContainer></BufferContainer>
        </Container>
    );
};

export default memo(Menu);
