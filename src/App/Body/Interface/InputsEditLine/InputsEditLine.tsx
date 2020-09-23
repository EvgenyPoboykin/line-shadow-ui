import React, { memo } from 'react';

import { Rotate, Linethickness, Linespacing, SettingsGroup } from '../../Inputs';

const InputsEditLine: React.FC = () => (
    <SettingsGroup name='Edit line'>
        <Rotate />
        <Linethickness />
        <Linespacing />
    </SettingsGroup>
);

export default memo(InputsEditLine);
