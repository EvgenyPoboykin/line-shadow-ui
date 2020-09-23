import React, { memo } from 'react';

import { Container } from './style';

import OpenFile from '../OpenFile';
import SmallPreview from '../SmallPreview';

const Preview: React.FC = () => (
    <Container>
        <SmallPreview />
        <OpenFile />
    </Container>
);

export default memo(Preview);
