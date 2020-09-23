import React, { memo } from 'react';
import Input from '../Input';

const Linethickness: React.FC = () => {
    return <Input title='Line thickness' fieldname='linethickness' float />;
};

export default memo(Linethickness);
