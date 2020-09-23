import React, { memo } from 'react';
import { IDialogWin } from './interfaces';
import { Container, Content } from './style';

const DialogWin: React.FC<IDialogWin> = ({ show, children, name }) => (
    <Container className={name} show={show}>
        <Content>{children}</Content>
    </Container>
);

export default memo(DialogWin);
