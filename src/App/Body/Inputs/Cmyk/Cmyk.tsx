import React, { memo } from 'react';
import { ICmyk } from './interfaces';
import Input from '../Input';

const Cmyk: React.FC<ICmyk> = ({ title, fieldname }) => {
    return <Input title={title} fieldname={fieldname} />;
};

export default memo(Cmyk);
