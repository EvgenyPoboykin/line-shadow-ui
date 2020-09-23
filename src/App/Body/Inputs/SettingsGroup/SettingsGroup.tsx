import React, { memo } from 'react';
import { ISettingsGroup } from './interfaces';

import { Container, ContainerInput, ContainerLine } from './style';

import TabName from './TabName';

const SettingsGroup: React.FC<ISettingsGroup> = ({ name, children }) => {
    return (
        <Container>
            <TabName name={name} />
            <ContainerInput>{children}</ContainerInput>
            <ContainerLine></ContainerLine>
        </Container>
    );
};

export default memo(SettingsGroup);
