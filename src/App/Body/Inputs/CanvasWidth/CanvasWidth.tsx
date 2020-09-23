import React, { memo } from 'react';

import Input from '../Input';

import Logic_CW from './logic_cw';

const CanvasWidth: React.FC = () => {
    const { SetValue } = Logic_CW();

    return <Input title='Width' fieldname='canvas_mm_width' Edit={SetValue} />;
};

export default memo(CanvasWidth);
