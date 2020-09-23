import React, { memo } from 'react';

import Input from '../Input';

import Logic_P from './logic_p';

const Ppi: React.FC = () => {
    const { SetValue } = Logic_P();
    return <Input title='Resolution' fieldname='ppi' Edit={SetValue} />;
};

export default memo(Ppi);
