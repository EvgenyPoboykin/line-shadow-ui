import React, { memo } from 'react';

import { Container } from './style';

import Preview from '../Preview';
import Description from '../Description';
import TitleWindow from '../../TitleWindow';

const FilePreview: React.FC = () => (
    <Container>
        <TitleWindow name='Image preview' />
        <Preview />
        <Description />
    </Container>
);

export default memo(FilePreview);
