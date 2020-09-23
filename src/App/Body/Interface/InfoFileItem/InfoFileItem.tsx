import React, { memo } from 'react';
import { IInfoFileItem } from './interfaces';
import { Container, Span } from './style';

const InfoFileItem: React.FC<IInfoFileItem> = ({ fieldName, fieldData }) => (
    <Container>
        {fieldName}: <Span>{fieldData}</Span>
    </Container>
);

export default memo(InfoFileItem);
