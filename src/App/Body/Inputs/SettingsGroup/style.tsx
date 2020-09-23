import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'SettingsGroup__container' })`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    ${(props: IContainer) => (props.disabled ? `opacity: 0.5;  user-select: none; pointer-events: none;` : `opacity: 1;`)}
`;
export const ContainerInput = styled.div.attrs({ className: 'SettingsGroup__inputs-container' })`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
`;
export const ContainerLine = styled.div.attrs({ className: 'SettingsGroup__line-container' })`
    width: 100%;
    border-bottom: 1px solid #323232;
    height: 2px;
`;
