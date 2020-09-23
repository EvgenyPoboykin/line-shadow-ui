import React, { useContext } from 'react';
import { ContextApp } from '../../../state';
import sizeMe from 'react-sizeme';
import { Content, ContainerContent, Container } from './style';

import GridCanvas from '../GridCanvas';

const LargePreview: React.FC = () => {
    const { picture } = useContext(ContextApp);

    return (
        <Container>
            <ContainerContent>
                <Content>{picture.image_url !== null ? <GridCanvas /> : 'Preview fragment output image'}</Content>
            </ContainerContent>
        </Container>
    );
};

export default sizeMe({ monitorHeight: true })(LargePreview);
