import React, { memo } from 'react';

import { Container } from './style';

import EditLine from '../InputsEditLine';
import CanvasSize from '../InputsCanvasSize';
import ColorLines from '../InputsColorLines';

const InputsData: React.FC = () => (
    <Container>
        <EditLine />
        <CanvasSize />
        <ColorLines />
    </Container>
);

export default memo(InputsData);
