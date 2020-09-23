import styled from 'styled-components';
import { grey_27, grey_50 } from '../../global';

export const Container = styled.div.attrs({ className: 'PreviewWindow__container' })`
    display: grid;
    grid-template-rows: 20px 1fr 20px;
    width: 100%;
    background-color: ${grey_27};
    border: 1px solid ${grey_50};
    padding: 0px 20px;
    position: relative;
`;
