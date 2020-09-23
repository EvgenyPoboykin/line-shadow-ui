import React, { memo } from 'react';

import { CanvasWidth, CanvasHeight, Ppi, SettingsGroup } from '../../Inputs';

const InputsCanvasSize: React.FC = () => (
    <SettingsGroup name='Canvas size'>
        <CanvasWidth></CanvasWidth>
        <CanvasHeight></CanvasHeight>
        <Ppi></Ppi>
    </SettingsGroup>
);

export default memo(InputsCanvasSize);
