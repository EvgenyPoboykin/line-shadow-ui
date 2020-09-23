import React from 'react';
import { ContextApp } from '../../../state';

const LogicGridLines = () => {
    const { interface_app, picture } = React.useContext(ContextApp);

    const widthLines = Math.ceil(Math.sqrt(Math.pow(interface_app.original_image_width, 2) + Math.pow(interface_app.original_image_height, 2)) + 200);

    let countLines = widthLines / (interface_app.linethickness_px + interface_app.linespacing_px);

    return { interface_app, picture, widthLines, countLines };
};

export default LogicGridLines;
