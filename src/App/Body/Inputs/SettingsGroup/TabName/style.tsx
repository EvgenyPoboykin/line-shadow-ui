import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'TabName__container' })`
    display: flex;
    width: 100%;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    user-select: none;
`;
export const Line = styled.div.attrs({ className: 'TabName__line' })`
    width: 100%;
    height: 1px;
    position: absolute;
    z-index: 0;

    background-color: #e1e1e1;
`;
export const Name = styled.div.attrs({ className: 'TabName__name' })`
    font-size: 14px;
    font-weight: 500;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-basis: 1;
    background-color: #232323;

    position: absolute;
    z-index: 1;

    color: #e1e1e1;
`;
