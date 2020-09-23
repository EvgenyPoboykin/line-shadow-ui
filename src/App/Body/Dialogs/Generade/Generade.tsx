import React, { memo } from 'react';
import { IGenerade } from './interfaces';
import DialogWin from '../DialogWin';

import { Container, IconPreloader, TextPreloader } from './style';

const Generade: React.FC<IGenerade> = ({ func, text }) => {
    return (
        <DialogWin>
            <Container>
                <IconPreloader />
                <TextPreloader>{text}</TextPreloader>
            </Container>
        </DialogWin>
    );
};

export default memo(Generade);
