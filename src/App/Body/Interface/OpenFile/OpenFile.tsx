import React, { memo } from 'react';

import CanvasFrame from '../CanvasFrame';
import FragmentCanvasFrame from '../FragmentCanvasFrame';

import { Container, ContainerImage, Title, Desc, OpenButtonContainer, OpenButton } from './style';

const OpenFile: React.FC = () => {
    return (
        <Container display={null}>
            <ContainerImage>
                <Title>Open image</Title>
                <Desc>press Open or drag and drop the image</Desc>

                <OpenButtonContainer>
                    <OpenButton>Open</OpenButton>
                </OpenButtonContainer>
            </ContainerImage>

            <FragmentCanvasFrame />
            <CanvasFrame />
        </Container>
    );
};

export default memo(OpenFile);
