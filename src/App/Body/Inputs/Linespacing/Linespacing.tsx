import React, { memo } from 'react';

import InputNumber from '../Input';

const Linespacing: React.FC = () => {
    return <InputNumber title='Line spacing' fieldname='linespacing' float />;
};

export default memo(Linespacing);
