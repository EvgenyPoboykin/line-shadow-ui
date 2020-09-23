import styled from 'styled-components';
import { IInput } from './interfaces';
export const InputContainer = styled.div.attrs({ className: 'InputField__container' })`
    height: 24px;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
`;

export const Span = styled.span.attrs({ className: 'InputField__metric-label' })`
    padding: 10px 5px;
    text-align: left;
    user-select: none;
    color: #c8c8c8;
`;

export const Input = styled.input.attrs<IInput>({ className: 'InputField__input', type: 'number' })<IInput>`
    text-align: right;
    height: 100%;
    pointer-events: all;
    background-color: #1e1e1e;
    color: #c8c8c8;
    font-size: 12px;
    font-weight: 400;
    ${(props) => props.widthCharacter && `width: ${8 * props.widthCharacter + 4}px;`};

    ${(props) =>
        props.disabledInput
            ? `cursor: text; `
            : `cursor: default; 
            user-select: none;
            pointer-events: none;`}

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        appearance: none;
    }
`;
