import React, { memo } from 'react';

import { Container } from './style';

import OpenFile from '../OpenFile';

const Preview: React.FC = () => (
    <Container>
        <OpenFile />
    </Container>
);

export default memo(Preview);
