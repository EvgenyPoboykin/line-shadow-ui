import React, { memo } from 'react';

import { Container } from './style';

import DescriptionItem from '../DescriptionItem';

const DescList = [
    { id: 1, color: 'green', desc: 'New border canvas' },
    { id: 2, color: 'red', desc: 'Fragment border' },
];

const Description: React.FC = () => (
    <Container>
        {DescList.map((item) => (
            <DescriptionItem key={item.id} text={item.desc} color={item.color} />
        ))}
    </Container>
);

export default memo(Description);
