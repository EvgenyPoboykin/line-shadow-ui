import React, { memo } from 'react';

import { ContextApp } from '../../../state';
import { ISettingsGroup } from './interfaces';

import { Container, ContainerInput, ContainerLine } from './style';

import TabName from './TabName';

const SettingsGroup: React.FC<ISettingsGroup> = ({ name, children }) => {
    const { picture } = React.useContext(ContextApp);
    return (
        <Container disabled={picture.image_url === null}>
            <TabName name={name} />
            <ContainerInput>{children}</ContainerInput>
            <ContainerLine></ContainerLine>
        </Container>
    );
};

export default memo(SettingsGroup);
