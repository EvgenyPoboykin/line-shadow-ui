import React, { memo } from 'react';
import { Container, CloseContainer, CloseItem, LogoContainer, AuthorContainer, LogoItem, LogoVersionItem, AuthorJob, AuthorUser, AuthorsContainer } from './style';

import aboutBg from './icons/about-bg.jpg';
import close from './icons/close.svg';
import logo from './icons/logo.svg';

import { ContextApp } from '../../../state';
import DialogWin from '../DialogWin';

import json from '../../../../../package.json';

const About: React.FC = () => {
    const { app, UseAppState } = React.useContext(ContextApp);
    return (
        <DialogWin show={app.show_about}>
            <Container bg={aboutBg}>
                <CloseContainer>
                    <CloseItem src={close} onClick={() => UseAppState({ ...app, show_about: false })} />
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
