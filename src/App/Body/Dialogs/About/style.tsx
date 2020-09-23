import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'About__content' })<IContainer>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 32px 142px 1fr;
    height: 353px;
    width: 353px;
    background-image: ${(props) => props.bg && `url(${props.bg})`};
    position: relative;
    background-size: cover;
`;
export const CloseContainer = styled.div.attrs({ className: 'About__close' })`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 32px;
    padding: 10px;
    pointer-events: all;
`;
export const CloseItem = styled.img.attrs({ className: 'About__close-icon' })`
    width: 12px;
    height: 12px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    transition: all 100ms ease-in-out;
`;

export const LogoContainer = styled.div.attrs({ className: 'About__logo-container' })`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 142px;
    justify-content: center;
    align-items: center;
`;

export const LogoItem = styled.img.attrs({ className: 'About__logo' })`
    height: 52px;
    pointer-events: none;
    user-select: none;
`;
export const LogoVersionItem = styled.div.attrs({ className: 'About__version' })`
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    padding-top: 12px;
    pointer-events: none;
    user-select: none;
`;

export const AuthorsContainer = styled.div.attrs({ className: 'About__autors-container' })`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    padding: 20px 10px;
    pointer-events: none;
    user-select: none;
`;
export const AuthorContainer = styled.div.attrs({ className: 'About__autor-container' })`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AuthorJob = styled.div.attrs({ className: 'About__autor-job' })`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #c8c8c8;
    text-transform: uppercase;
`;
export const AuthorUser = styled.div.attrs({ className: 'About__user' })`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: #969696;
    padding-top: 12px;
`;
