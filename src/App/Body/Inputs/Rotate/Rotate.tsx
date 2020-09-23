import React, { memo } from 'react';

import Input from '../Input';

const Rotate: React.FC = () => {
    return <Input title='Rotate' fieldname='rotate' />;
};

export default memo(Rotate);
