import React, { memo } from 'react';
import { ContextApp } from '../../../state';
import { Cmyk, SettingsGroup } from '../../Inputs';

import ColorPreview from '../ColorPreview';

import cmyk2rgb from '../../cmyk2rgb';

const InputsColorLines: React.FC = () => {
    const { interface_app } = React.useContext(ContextApp);

    const cmyk = cmyk2rgb(interface_app.cmyk_c, interface_app.cmyk_m, interface_app.cmyk_y, interface_app.cmyk_k);

    return (
        <SettingsGroup name='Color line thickness'>
            <ColorPreview colorBg={`rgb(${cmyk.r},${cmyk.g}, ${cmyk.b})`} />
            <Cmyk title='C' fieldname='cmyk_c' />
            <Cmyk title='M' fieldname='cmyk_m' />
            <Cmyk title='Y' fieldname='cmyk_y' />
            <Cmyk title='K' fieldname='cmyk_k' />
        </SettingsGroup>
    );
};

export default memo(InputsColorLines);
