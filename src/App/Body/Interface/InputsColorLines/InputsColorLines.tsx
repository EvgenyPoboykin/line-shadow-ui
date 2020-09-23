import React, { memo } from 'react';

import { Cmyk, SettingsGroup } from '../../Inputs';

import ColorPreview from '../ColorPreview';

const InputsColorLines: React.FC = () => {
    return (
        <SettingsGroup name='Color line thickness'>
            <ColorPreview />
            <Cmyk title='C' fieldname='cmyk_c' />
            <Cmyk title='M' fieldname='cmyk_m' />
            <Cmyk title='Y' fieldname='cmyk_y' />
            <Cmyk title='K' fieldname='cmyk_k' />
        </SettingsGroup>
    );
};

export default memo(InputsColorLines);
