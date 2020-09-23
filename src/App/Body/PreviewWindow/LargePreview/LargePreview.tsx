import React from 'react';

import sizeMe from 'react-sizeme';
import { Content, ContainerContent, Container } from './style';

const LargePreview: React.FC = () => {
    return (
        <Container>
            <ContainerContent>
                <Content>Preview fragment output image</Content>
            </ContainerContent>
        </Container>
    );
};

export default sizeMe({ monitorHeight: true })(LargePreview);
