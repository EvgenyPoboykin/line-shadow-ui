import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TitleWindow__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    font-size: 12px;
    font-weight: 400;
    margin-top: -1px;
`;
