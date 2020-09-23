import styled from 'styled-components';
import { ILine } from './intefaces';

export const Line = styled.div.attrs({ className: 'PrintLine__container' })<ILine>`
    background-color: ${(props) => props.colorLine && props.colorLine};
    height: ${(props) => props.heightLine && `${props.heightLine}px`};
    width: ${(props) => props.widthLines && `${props.widthLines}px`};
    margin-top: ${(props) => props.margenTop && `${props.margenTop}px`};
`;
