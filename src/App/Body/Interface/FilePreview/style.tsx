import styled from 'styled-components';
import { grey_27, grey_50 } from '../../../global';

export const Container = styled.div.attrs({ className: 'FilePreview__container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr 20px;
    height: 398px;
    background-color: ${grey_27};
    border-bottom: 1px solid ${grey_50};
    padding: 0px 20px;
    user-select: none;
`;
