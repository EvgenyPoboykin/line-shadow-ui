import React, { memo } from 'react';
import logo from './icons/logo.svg';

import { Container, Logotype, BufferContainer, Virsion } from './style';

const json = require('../../../../package.json');

const Logo: React.FC = () => (
    <Container>
        <Logotype src={logo} />
        <Virsion>
            {json.version} {json.description}
        </Virsion>
        <BufferContainer></BufferContainer>
    </Container>
);

export default memo(Logo);
