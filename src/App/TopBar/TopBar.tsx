import React, { memo } from 'react';
import { Container } from './style';

import Logo from './Logo';
import Menu from './Menu';
import Controls from './Controls';

const { ipcRenderer } = window.require('electron');

const TopBar: React.FC = () => {
    const onDoubleClickTopBar = () => {
        ipcRenderer.send('maximize');
    };

    return (
        <Container onDoubleClick={onDoubleClickTopBar}>
            <Logo />
            <Menu />
            <Controls />
        </Container>
    );
};

export default memo(TopBar);
