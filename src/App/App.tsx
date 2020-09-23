import React from 'react';
import { Container, Input, ProtectorFileDiv, FullImage, ForGroundLayer, BackGroundLayer, FillBackGroundLayer } from './style';

import { ProviderApp } from './state';
import { LogicApp } from './logic';
import TopBar from './TopBar';
import Body from './Body';

export default React.memo(() => {
    const {
        app,

        picture,
        interface_app,
        interface_default,
        interface_value,
        inputRef,
        inputData,

        UseInterfaceState,
        UseAppState,
        UseInterfaceDefaultState,

        onChangeFile,
        onClickCloseFile,
        onClickSave,
        onClickFromToMenu,
        ConfirmDialogWindowYes,
        ConfirmDialogWindowNo,
        ConfirmDialogWindowCancel,
    } = LogicApp();

    const ImportFile = React.useCallback((e) => onChangeFile(e.target.files[0]), [onChangeFile]);

    // console.log(interface_app);

    return (
        <ProviderApp
            value={{
                app,

                picture,
                interface_app,
                interface_default,
                interface_value,
                inputData,

                UseInterfaceState,
                UseAppState,
                UseInterfaceDefaultState,

                onChangeFile,
                onClickFromToMenu,
                onClickSave,
                onClickCloseFile,
                ConfirmDialogWindowYes,
                ConfirmDialogWindowNo,
                ConfirmDialogWindowCancel,
            }}
        >
            <Container>
                <TopBar />
                <Body />

                <Input onChange={ImportFile} ref={inputRef} />

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
