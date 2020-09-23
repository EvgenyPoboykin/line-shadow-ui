import styled from 'styled-components';
import { ICircle } from './interfaces';
import { text_175, red, green } from '../../../global';

export const Container = styled.div.attrs({ className: 'DescItem__container' })`
    display: flex;
    width: 30%;
    height: 18px;
    align-items: center;
    justify-content: center;
`;
export const Circle = styled.div.attrs({ className: 'DescItem__circle' })`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${(props: ICircle) => (props.color === 'red' ? red : green)};
`;
export const Text = styled.div.attrs({ className: 'DescItem__text' })`
    font-size: 12px;
    font-weight: 400;
    color: ${text_175};
    padding: 0px 10px;
`;
