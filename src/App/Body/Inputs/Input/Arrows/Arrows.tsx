import React, { memo } from 'react';
import { IArrows } from './interfaces';
import { ContainerButtons, ContainerButton, ButtonUp, ButtonDown } from './style';

const Arrows: React.FC<IArrows> = ({ disabled, fieldname, onClickButtonUp, onClickButtonDown, onContextMenu }) => {
    return (
        <ContainerButtons>
            <ContainerButton
                className={`Arrows__${fieldname}_button-up`}
                onClick={disabled ? onClickButtonUp : undefined}
                onContextMenu={disabled ? (e: React.MouseEvent) => onContextMenu(e) : undefined}
                disabled={disabled}
            >
                <ButtonUp />
            </ContainerButton>
            <ContainerButton
                className={`Arrows__${fieldname}_button-down`}
                onClick={disabled ? onClickButtonDown : undefined}
                onContextMenu={disabled ? (e: React.MouseEvent) => onContextMenu(e) : undefined}
                disabled={disabled}
            >
                <ButtonDown />
            </ContainerButton>
        </ContainerButtons>
    );
};

export default memo(Arrows);
