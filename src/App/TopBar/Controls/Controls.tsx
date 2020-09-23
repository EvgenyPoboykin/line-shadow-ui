import React, { memo } from 'react';
import inc from './icons/inc.svg';
import dic from './icons/dic.svg';
import close from './icons/close.svg';

import { Container } from './style';
import Btn from './Btn';

const { ipcRenderer } = window.require('electron');

const Controls: React.FC = () => {
    const Minimize = () => {
        ipcRenderer.send('minimize');
    };

    const Maximize = () => {
        ipcRenderer.send('maximum');
    };
    const Close = () => {
        ipcRenderer.send('close');
    };

    return (
        <Container>
            <Btn src={dic} onClick={Minimize} name='Minimize' />
            <Btn src={inc} onClick={Maximize} name='Maximize' />
            <Btn src={close} onClick={Close} name='Close' />
        </Container>
    );
};

export default memo(Controls);
