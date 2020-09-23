import React, { memo } from 'react';
import Input from '../Input';

const CanvasHeight: React.FC = () => {
    return <Input title='Height' fieldname='canvas_mm_height' />;
};

export default memo(CanvasHeight);
