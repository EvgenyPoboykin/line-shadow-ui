import React, { memo } from 'react';

import { Container } from './style';

import InfoFile from './InfoFile';
import FilePreview from './FilePreview';
import DataInputs from './InputsData';
import Save from './Save';

const Interface: React.FC = () => (
    <Container>
        <InfoFile />
        <FilePreview />
        <DataInputs />
        <Save />
    </Container>
);

export default memo(Interface);
