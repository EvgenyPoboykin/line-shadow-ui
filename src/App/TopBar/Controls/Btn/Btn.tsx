import React, { memo } from 'react';
import { IBtn } from './interfaces';
import { Container, Icon } from './style';

const Btn: React.FC<IBtn> = ({ src, onClick, name }) => (
    <Container onClick={onClick} className={name}>
        <Icon src={src} />
    </Container>
);

export default memo(Btn);
