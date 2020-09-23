import styled from 'styled-components';
import { grey_50, animation } from '../../../global';

export const Container = styled.div.attrs({ className: 'InfoFile__container' })`
    display: grid;
    grid-template-columns: 8fr 1fr;
    height: 90px;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${grey_50};
`;
export const Info = styled.div.attrs({ className: 'InfoFile__information' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    user-select: none;
`;
export const Close = styled.img.attrs({ className: 'InfoFile__close-button' })`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    ${animation}
`;
