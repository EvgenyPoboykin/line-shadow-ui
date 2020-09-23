import React, { memo } from 'react';
import { IInputField } from './interfaces';

import { InputContainer, Input, Span } from './style';

const InputField: React.FC<IInputField> = ({ value, fieldname, onChange, onBlur, onKeyPress, onKeyDown }) => {
    return (
        <InputContainer>
            <Input
                className={fieldname}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
            />
            <Span>metric</Span>
        </InputContainer>
    );
};

export default memo(InputField);
