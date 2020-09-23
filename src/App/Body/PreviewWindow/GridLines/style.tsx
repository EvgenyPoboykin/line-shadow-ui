import styled from 'styled-components';
import { IContainer, IGridContainer } from './interfaces';

export const Container = styled.div.attrs<IContainer>({ className: 'GridLines__container' })<IContainer>`
    ${(props) =>
        props.forground
            ? `--webkit-mask-image:  url('${props.urlMask}');
    
    --webkit-mask-mode: alpha;
    --webkit-mask-type: alpha;
    --webkit-mask-repeat: no-repeat;
    mask-image: url('${props.urlMask}');
    mask-size: ${props.widthcanvaspixeloriginal}px ${props.heightcanvaspixeloriginal}px;
--webkit-mask-size: ${props.widthcanvaspixeloriginal}px ${props.heightcanvaspixeloriginal}px;
    
    mask-mode: alpha;
    mask-type: alpha;
    mask-repeat: no-repeat;
    `
            : null};
    width: ${(props) => props.widthcanvaspixeloriginal && `${props.widthcanvaspixeloriginal}px`};
    height: ${(props) => props.heightcanvaspixeloriginal && `${props.heightcanvaspixeloriginal}px`};
    z-index: ${(props) => (props.forground ? '2' : '1')};

    position: absolute;

    overflow: hidden;
`;

export const GridContainer = styled.div.attrs({ className: 'GridLines__grid-container-offset' })<IGridContainer>`
    transform: ${(props) => props.deg && `rotate(${props.deg}deg)`};
    width: ${(props) => props.widthLines && `${props.widthLines}px`};
    height: ${(props) => props.widthLines && `${props.widthLines}px`};
    margin-left: ${(props) => props.marginLeft && `${props.marginLeft}px`};
    margin-top: ${(props) => props.marginTop && `${props.marginTop}px`};
    background-color: #fff;
`;
