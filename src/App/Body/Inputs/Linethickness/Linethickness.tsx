import React, { memo } from 'react';

import Input from '../Input';

import Logic_LT from './logic_lt';

const Linethickness: React.FC = () => {
    const { SetValue } = Logic_LT();

    return <Input title='Line thickness' fieldname='linethickness' Edit={SetValue} float />;
};

export default memo(Linethickness);
