import React, { memo } from 'react';

import { Container } from './style';

import TitleWindow from '../TitleWindow';
import LargePreview from './LargePreview';
import BottomData from './BottomData';
import PreviewWindow_Logic from './logic';

const PreviewWindow: React.FC = () => {
    const { onSizeLargePreview } = PreviewWindow_Logic();
    return (
        <Container>
            <TitleWindow name='Preview fragment output image' />
            <LargePreview onSize={onSizeLargePreview} />
            <BottomData />
        </Container>
    );
};

export default memo(PreviewWindow);
