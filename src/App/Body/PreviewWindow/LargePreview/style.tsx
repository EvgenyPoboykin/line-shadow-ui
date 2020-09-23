import styled from 'styled-components';

// interface IContainer {
//     ref: React.MutableRefObject<HTMLDivElement>;
// }

export const Container = styled.div.attrs({ className: 'LargePreview__container' })`
    display: flex;

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    overflow: hidden;
    position: relative;
`;
export const ContainerContent = styled.div.attrs({ className: 'LargePreview__content-container' })`
    display: flex;

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    overflow: hidden;
    position: relative;
`;
export const Content = styled.div.attrs({ className: 'LargePreview__content', id: 'get-dim' })`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #232323;
    user-select: none;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    border: 1px dashed #e1640f;
    color: #646464;
`;
