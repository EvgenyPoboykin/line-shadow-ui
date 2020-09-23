import styled from 'styled-components';
import { green } from '../../../global';

export const Container = styled.div.attrs({ className: 'CanvasFrame__container' })`
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;

    border: 1px dashed ${green};
    z-index: 0;
`;
