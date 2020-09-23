import React, { memo } from 'react';
import { IInputField } from './interfaces';
import { ContextApp } from '../../../../state';
import { InputContainer, Input, Span } from './style';

const InputField: React.FC<IInputField> = ({ value, fieldname, onChange, onBlur, onKeyPress, onKeyDown }) => {
    const { interface_app, UseInterfaceState, picture, interface_value, inputData } = React.useContext(ContextApp);

    return (
        <InputContainer>
            <Input ref={inputData} className={fieldname} widthCharacter={interface_value[`${fieldname}_maxlength`]} min={interface_value[`${fieldname}_min`]} max={interface_value[`${fieldname}_max`]} step={interface_value[`${fieldname}_step`]} value={value} onChange={picture.image_url !== null ? (e) => onChange(e) : undefined} onKeyPress={picture.image_url !== null ? (e) => onKeyPress(e) : undefined} onKeyDown={picture.image_url !== null ? (e) => onKeyDown(e) : undefined} onFocus={picture.image_url !== null ? () => UseInterfaceState({ ...interface_app, focus: true }) : undefined} onBlur={picture.image_url !== null ? () => onBlur() : undefined} disabledInput={picture.image_url !== null} readOnly={picture.image_url === null} />
            <Span>{interface_value[`${fieldname}_metric`]}</Span>
        </InputContainer>
    );
};

export default memo(InputField);
