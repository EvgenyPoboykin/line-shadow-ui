import React, { memo } from 'react';
import { IConfirmDialogWindow } from './interfaces';
import { IconError, TextError, ContainerDialogContainer, DialogBtns, DialogBtn } from './style';

import DialogWin from '../DialogWin';

const ConfirmDialogWindow: React.FC<IConfirmDialogWindow> = ({ func, text }) => {
    return (
        <DialogWin>
            <ContainerDialogContainer>
                <IconError />
                <TextError>{text}</TextError>
                <DialogBtns>
                    <DialogBtn>Yes</DialogBtn>
                    <DialogBtn>No</DialogBtn>
                    <DialogBtn>Cancel</DialogBtn>
                </DialogBtns>
            </ContainerDialogContainer>
        </DialogWin>
    );
};

export default memo(ConfirmDialogWindow);
