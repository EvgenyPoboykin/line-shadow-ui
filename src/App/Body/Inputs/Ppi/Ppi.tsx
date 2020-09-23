import React, { memo } from 'react';

import Input from '../Input';

const Ppi: React.FC = () => {
    return <Input title='Resolution' fieldname='ppi' />;
};

export default memo(Ppi);
