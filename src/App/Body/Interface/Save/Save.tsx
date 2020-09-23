import React, { memo } from 'react';

import { Container, SaveButton } from './style';

const Save: React.FC = () => {
    return (
        <Container>
            <SaveButton>Save as</SaveButton>
        </Container>
    );
};

export default memo(Save);
