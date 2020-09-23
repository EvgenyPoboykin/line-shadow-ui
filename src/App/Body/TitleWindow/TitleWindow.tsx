import React, { memo } from 'react';

import { Container } from './style';

interface ITitleWindow {
    name: string;
}

const TitleWindow: React.FC<ITitleWindow> = ({ name }) => <Container>{name}</Container>;

export default memo(TitleWindow);
