import React, { memo } from 'react';

import InputNumber from '../Input';

import Logic_LS from './logic_ls';

const Linespacing: React.FC = () => {
    const { SetValue } = Logic_LS();

    return <InputNumber title='Line spacing' fieldname='linespacing' Edit={SetValue} float />;
};

export default memo(Linespacing);
