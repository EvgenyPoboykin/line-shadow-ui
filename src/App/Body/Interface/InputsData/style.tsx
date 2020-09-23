import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'DataInputs__container' })`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 325px;
    height: 100%;
    padding-top: 10px;

    justify-content: space-around;
    align-items: center;
`;
