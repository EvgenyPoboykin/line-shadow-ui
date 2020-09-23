import React from 'react';
import { IDescItem } from './interfaces';
import { Container, Circle, Text } from './style';

const DescItem: React.FC<IDescItem> = ({ text, color }) => (
    <Container>
        <Circle color={color}></Circle>
        <Text>{text}</Text>
    </Container>
);

export default DescItem;
