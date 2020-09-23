import React, { memo, useContext } from 'react';
import { ContextApp } from '../../../state';
import close from './icons/close.svg';

import { Container, Info, Close } from './style';

import InfoFileItem from '../InfoFileItem';

const InfoFile: React.FC = () => {
    const { picture, onClickCloseFile } = useContext(ContextApp);
    return (
        <Container>
            <Info>
                <InfoFileItem fieldName='Name' fieldData={picture.image_name} />
                <InfoFileItem fieldName='Size' fieldData={picture.image_size} />
                <InfoFileItem fieldName='Color mode' fieldData={picture.image_url ? picture.image_input_color_mode : ''} />
            </Info>

            {picture.image_url !== null ? <Close src={close} onClick={onClickCloseFile} /> : null}
        </Container>
    );
};

export default memo(InfoFile);
