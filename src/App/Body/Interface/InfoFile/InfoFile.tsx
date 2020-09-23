import React, { memo } from 'react';

import close from './icons/close.svg';

import { Container, Info, Close } from './style';

import InfoFileItem from '../InfoFileItem';

const InfoFile: React.FC = () => {
    return (
        <Container>
            <Info>
                <InfoFileItem fieldName='Name' />
                <InfoFileItem fieldName='Size' />
                <InfoFileItem fieldName='Color mode' />
            </Info>

            <Close src={close} />
        </Container>
    );
};

export default memo(InfoFile);
