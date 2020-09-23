import React, { memo } from 'react';
import { IGridLine } from './intefaces';
import { ContextApp } from '../../../state';
import { Line } from './style';

import cmyk2rgb from '../../cmyk2rgb';

const GridLine: React.FC<IGridLine> = ({ widthLines }) => {
    const { interface_app } = React.useContext(ContextApp);

    const cmyk = cmyk2rgb(interface_app.cmyk_c, interface_app.cmyk_m, interface_app.cmyk_y, interface_app.cmyk_k);

    return <Line widthLines={widthLines} colorLine={`rgb(${cmyk.r},${cmyk.g}, ${cmyk.b})`} margenTop={interface_app.linespacing_px} heightLine={interface_app.linethickness_px}></Line>;
};

export default memo(GridLine);
