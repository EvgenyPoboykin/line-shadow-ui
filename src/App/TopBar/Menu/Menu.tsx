import React, { memo } from 'react';
import { ContextApp } from '../../state';
import { Container, BufferContainer } from './style';

import CustomSubMenuItem from './CustomSubMenuItem';
import SubMenu from './SubMenu';

const Menu: React.FC = () => {
    const { app, picture, interface_app, UseAppState, onClickFromToMenu } = React.useContext(ContextApp);

    return (
        <Container>
            <SubMenu name='File' showabout={app.show_about} generator={app.confirm_dialog_rerender} focus={interface_app.focus} open={app.confirm_dialog_open} close={app.confirm_dialog_close}>
                <CustomSubMenuItem name='Open' shortcut='Ctrl + O' disabled={false} onClickMenuItem={onClickFromToMenu} func={'open-from-top-menu'} />
                <CustomSubMenuItem name='Save' shortcut='Ctrl + S' disabled={picture.save !== null} onClickMenuItem={onClickFromToMenu} func={'save-from-top-menu'} />
                <CustomSubMenuItem name='Save as' shortcut='Ctrl + Shift + S' disabled={picture.image_url === null} onClickMenuItem={onClickFromToMenu} func={'save-as-from-top-menu'} />
                <CustomSubMenuItem name='Exit' shortcut='Ctrl + Q' disabled={false} onClickMenuItem={onClickFromToMenu} func={'quit-from-top-menu'} />
            </SubMenu>

            <SubMenu name='Edit' showabout={app.show_about} generator={app.confirm_dialog_rerender} focus={interface_app.focus} open={app.confirm_dialog_open} close={app.confirm_dialog_close}>
                <CustomSubMenuItem name='About' disabled={false} onClickMenuItem={() => UseAppState({ ...app, show_about: true })} func={'adout-from-top-menu'} />
                <CustomSubMenuItem name='View Manual' disabled={true} onClickMenuItem={onClickFromToMenu} func={'manual-from-top-menu'} />
                <CustomSubMenuItem name='Check for Updates' disabled={true} onClickMenuItem={onClickFromToMenu} func={'update-from-top-menu'} />
                <CustomSubMenuItem name='Software Licenses' disabled={true} onClickMenuItem={onClickFromToMenu} func={'licenses-from-top-menu'} />
            </SubMenu>
            <BufferContainer></BufferContainer>
        </Container>
    );
};

export default memo(Menu);
