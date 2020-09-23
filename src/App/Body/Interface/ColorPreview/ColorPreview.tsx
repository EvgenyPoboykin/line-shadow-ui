import React, { useContext, memo } from 'react';
import { IColorPreview } from './interfaces';
import { Container, ContainerText } from './style';
import { ContextApp } from '../../../state';

const ColorPreview: React.FC<IColorPreview> = ({ colorBg }) => {
    const { picture } = useContext(ContextApp);
    return (
        <>
            <ContainerText disabled={picture.image_url}>CMYK</ContainerText>
            <Container disabled={picture.image_url} colorBg={colorBg}></Container>
        </>
    );
};

export default memo(ColorPreview);
