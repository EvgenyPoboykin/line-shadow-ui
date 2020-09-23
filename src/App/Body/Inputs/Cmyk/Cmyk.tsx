import React, { memo } from 'react';
import { ICmyk } from './interfaces';
import Input from '../Input';
import Logic from './logic';

const Cmyk: React.FC<ICmyk> = ({ title, fieldname }) => {
    const { SetValue } = Logic(fieldname);

    return <Input title={title} fieldname={fieldname} Edit={SetValue} />;
};

export default memo(Cmyk);
