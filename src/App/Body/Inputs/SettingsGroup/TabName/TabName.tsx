import React, { memo } from 'react';
import { ITabName } from './interfaces';
import { Container, Line, Name } from './style';

const TabName: React.FC<ITabName> = ({ name }) => (
    <Container>
        <Name>{name}</Name>
        <Line />
    </Container>
);

export default memo(TabName);
