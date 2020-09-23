import styled from 'styled-components';
import preloader from './icons/preloader.gif';

export const Container = styled.div.attrs({ className: 'Generade__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;
`;

export const IconPreloader = styled.img.attrs({ className: 'Generade__preloader', src: preloader })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    user-select: none;
    pointer-events: none;
`;
export const TextPreloader = styled.div.attrs({ className: 'Generade__preloader-text', src: preloader })`
    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    pointer-events: none;
    padding-top: 20px;
`;
