import React, { memo } from 'react';
import {
    Container,
    CloseContainer,
    CloseItem,
    LogoContainer,
    AuthorContainer,
    LogoItem,
    LogoVersionItem,
    AuthorJob,
    AuthorUser,
    AuthorsContainer,
} from './style';

import aboutBg from './icons/about-bg.jpg';
import close from './icons/close.svg';
import logo from './icons/logo.svg';

import DialogWin from '../DialogWin';

import json from '../../../../../package.json';

const About: React.FC = () => {
    return (
        <DialogWin>
            <Container bg={aboutBg}>
                <CloseContainer>
                    <CloseItem src={close} />
                </CloseContainer>
                <LogoContainer>
                    <LogoItem src={logo} />
                    <LogoVersionItem>
                        {json.version} {json.description}
                    </LogoVersionItem>
                </LogoContainer>
                <AuthorsContainer>
                    <AuthorContainer>
                        <AuthorJob>Project Management / DESIGN</AuthorJob>
                        <AuthorUser>Yuriy Moroz</AuthorUser>
                    </AuthorContainer>
                    <AuthorContainer>
                        <AuthorJob>Development</AuthorJob>
                        <AuthorUser>Evgeny Poboykin</AuthorUser>
                    </AuthorContainer>
                </AuthorsContainer>
            </Container>
        </DialogWin>
    );
};

export default memo(About);
