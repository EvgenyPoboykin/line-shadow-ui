import React, { memo } from 'react';
import Input_Logic from './logic';
import { IInput } from './interfaces';
import InputField from './InputField';
import Arrows from './Arrows';
import { Container, Label, ContainerAll } from './style';

const Input: React.FC<IInput> = ({ title, fieldname, Edit, float }) => {
    const {
        value,
        onBlur,
        onKeyPress,
        onKeyDown,
        onClickButtonUp,
        onContextMenu,
        onChangeInputFloat,
        onChangeInputInt,
        onClickButtonDown,
    } = Input_Logic(fieldname, Edit, float);

    return (
        <Container>
            <Label>{title}</Label>

            <ContainerAll>
                <InputField
                    value={value}
                    fieldname={fieldname}
                    onChange={float ? onChangeInputFloat : onChangeInputInt}
                    onKeyPress={onKeyPress}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                />

                <Arrows
                    fieldname={fieldname}
                    onClickButtonUp={onClickButtonUp}
                    onClickButtonDown={onClickButtonDown}
                    onContextMenu={onContextMenu}
                />
            </ContainerAll>
        </Container>
    );
};

export default memo(Input);
