import React, { memo } from 'react';

import Input from '../Input';

import Logic_CH from './logic_ch';

const CanvasHeight: React.FC = () => {
    const { SetValue } = Logic_CH();

    return <Input title='Height' fieldname='canvas_mm_height' Edit={SetValue} />;
};

export default memo(CanvasHeight);
