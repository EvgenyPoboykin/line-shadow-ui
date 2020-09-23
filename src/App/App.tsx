import React from 'react';
import {
    Container,
    Input,
    ProtectorFileDiv,
    FullImage,
    ForGroundLayer,
    BackGroundLayer,
    FillBackGroundLayer,
} from './style';

import { ProviderApp } from './state';

import TopBar from './TopBar';
import Body from './Body';

export default React.memo(() => {
    return (
        <ProviderApp>
            <Container>
                <TopBar />
                <Body />

                <Input />

                <ProtectorFileDiv>
                    <FullImage>
                        <ForGroundLayer></ForGroundLayer>
                        <BackGroundLayer></BackGroundLayer>
                        <FillBackGroundLayer></FillBackGroundLayer>
                    </FullImage>
                </ProtectorFileDiv>
            </Container>
        </ProviderApp>
    );
});
