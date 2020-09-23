import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TopBar__container' })`
    display: grid;
    grid-template-columns: 515px 1fr 135px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(20, 20, 20);
`;
