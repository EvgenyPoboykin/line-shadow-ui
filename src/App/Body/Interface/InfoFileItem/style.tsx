import styled from 'styled-components';
import { text_175 } from '../../../global';

export const Container = styled.div.attrs({ className: 'InfoFileItem__container' })`
    font-size: 12px;
    font-weight: 400;
    padding: 5px;
    color: #646464;
    user-select: none;
`;
export const Span = styled.span.attrs({ className: 'InfoFileItem__data' })`
    padding: 5px;
    color: ${text_175};
    user-select: none;
`;
