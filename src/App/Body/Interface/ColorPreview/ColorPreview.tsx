import React, { memo } from 'react';
import { IColorPreview } from './interfaces';
import { Container, ContainerText } from './style';

const ColorPreview: React.FC<IColorPreview> = ({ colorBg }) => {
    return (
        <>
            <ContainerText>CMYK</ContainerText>
            <Container colorBg={colorBg}></Container>
        </>
    );
};

export default memo(ColorPreview);
