import React, { memo } from 'react';
import { IGenerade } from './interfaces';
import DialogWin from '../DialogWin';
import { ContextApp } from '../../../state';

import { Container, IconPreloader, TextPreloader } from './style';

const Generade: React.FC<IGenerade> = ({ func, text }) => {
    const { app } = React.useContext(ContextApp);

    return (
        <DialogWin show={app[`confirm_dialog_${func}`]}>
            <Container>
                <IconPreloader />
                <TextPreloader>{text}</TextPreloader>
            </Container>
        </DialogWin>
    );
};

export default memo(Generade);
