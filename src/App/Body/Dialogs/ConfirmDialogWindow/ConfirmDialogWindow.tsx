import React, { memo } from 'react';
import { IConfirmDialogWindow } from './interfaces';
import { IconError, TextError, ContainerDialogContainer, DialogBtns, DialogBtn } from './style';
import { ContextApp } from '../../../state';
import DialogWin from '../DialogWin';

const ConfirmDialogWindow: React.FC<IConfirmDialogWindow> = ({ func, text }) => {
    const { app, ConfirmDialogWindowYes, ConfirmDialogWindowNo, ConfirmDialogWindowCancel } = React.useContext(ContextApp);

    return (
        <DialogWin show={app[`confirm_dialog_${func}`]}>
            <ContainerDialogContainer>
                <IconError />
                <TextError>{text}</TextError>
                <DialogBtns>
                    <DialogBtn onClick={() => ConfirmDialogWindowYes(func)}>Yes</DialogBtn>
                    <DialogBtn onClick={() => ConfirmDialogWindowNo(func)}>No</DialogBtn>
                    <DialogBtn onClick={() => ConfirmDialogWindowCancel(func)}>Cancel</DialogBtn>
                </DialogBtns>
            </ContainerDialogContainer>
        </DialogWin>
    );
};

export default memo(ConfirmDialogWindow);
