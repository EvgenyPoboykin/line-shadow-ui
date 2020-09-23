import React, { memo } from 'react';

import Input from '../Input';

import Logic_R from './logic_r';

const Rotate: React.FC = () => {
    const { SetValue } = Logic_R();

    return <Input title='Rotate' fieldname='rotate' Edit={SetValue} />;
};

export default memo(Rotate);
