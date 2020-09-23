import React, { useContext, memo } from 'react';
import { ContextApp } from '../../../state';

import { Container, SaveButton } from './style';

const Save: React.FC = () => {
    const { picture, app, onClickSave } = useContext(ContextApp);
    return (
        <Container disabled={picture.image_url === null}>
            <SaveButton onClick={onClickSave}>{app.save === null ? 'Save as' : 'Save'}</SaveButton>
        </Container>
    );
};

export default memo(Save);
