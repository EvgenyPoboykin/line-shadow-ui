import React, { memo } from 'react';
import { LogicOpenFile } from '../logic';
import { About, ConfirmDialogWindow, Generade, Loading } from './Dialogs';
import { Container, ContainerInterface } from './style';

import Interface from './Interface';
import PreviewWindow from './PreviewWindow';

const Body: React.FC = () => {
    // импорт функций и переменных из ./logic
    const { onDragOver, onDragEnter, onDragLeave, onDrop } = LogicOpenFile();

    return (
        // контейнер тела
        <Container onDragOver={(e) => onDragOver(e)} onDragEnter={(e) => onDragEnter(e)} onDragLeave={(e) => onDragLeave(e)} onDrop={(e) => onDrop(e)}>
            {/* драг-н-дроп див */}
            <Loading />
            {/* диологовое онкно закрыть картинку */}
            <ConfirmDialogWindow func='close' text='Save changes to the Line Shadow document before closing?' />
            {/* диологовое онкно открыть картинку */}
            <ConfirmDialogWindow func='open' text='Save changes to the Line Shadow document opening new image?' />
            {/* диалоговое окно о продукте */}
            <About />
            {/* генерация линий */}
            <Generade func='generade' text='Generate Grids' />
            <Generade func='rerender' text='Generate Tiff' />

            <ContainerInterface>
                {/* интерфейс */}
                <Interface />
                {/* окно просмотра  */}
                <PreviewWindow />
            </ContainerInterface>
        </Container>
    );
};

export default memo(Body);
