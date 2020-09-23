import React, { memo } from 'react';
import { About, ConfirmDialogWindow, Generade, Loading } from './Dialogs';
import { Container, ContainerInterface } from './style';

import Interface from './Interface';
import PreviewWindow from './PreviewWindow';

const Body: React.FC = () => {
    return (
        <Container>
            <Loading />

            <ConfirmDialogWindow func='close' text='Save changes to the Line Shadow document before closing?' />

            <ConfirmDialogWindow func='open' text='Save changes to the Line Shadow document opening new image?' />

            <About />

            <Generade func='generade' text='Generate Grids' />
            <Generade func='rerender' text='Generate Tiff' />

            <ContainerInterface>
                <Interface />

                <PreviewWindow />
            </ContainerInterface>
        </Container>
    );
};

export default memo(Body);
