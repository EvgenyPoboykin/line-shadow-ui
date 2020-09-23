import React, { memo } from 'react';
import Input from '../Input';

const CanvasWidth: React.FC = () => {
    return <Input title='Width' fieldname='canvas_mm_width' />;
};

export default memo(CanvasWidth);
