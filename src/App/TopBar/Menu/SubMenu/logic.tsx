import React, { useCallback, useEffect, useRef, useState } from 'react';

const SubMenu_Logic = (showabout?: boolean, focus?: boolean, open?: boolean, close?: boolean, generator?: boolean) => {
    const [openmenu, UseOpenMenu] = useState<boolean>(false);
    const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const onClickItem = () => {
        UseOpenMenu(true);
    };

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            if ((wrapperRef.current! as any) && !(wrapperRef.current! as any).contains(e.target)) {
                UseOpenMenu(false);
            }
        },
        [wrapperRef, UseOpenMenu]
    );

    const ShortCutsProgram = useCallback(
        (e: KeyboardEvent) => {
            e.preventDefault();

            if (e.key === 'Escape') {
                UseOpenMenu(false);
            }
        },
        [UseOpenMenu]
    );

    useEffect(() => {
        if (!focus && openmenu) {
            window.addEventListener('keydown', ShortCutsProgram);
        }

        return () => {
            if (!focus && openmenu) {
                window.removeEventListener('keydown', ShortCutsProgram);
            }
        };
    }, [openmenu, focus, ShortCutsProgram]);

    useEffect(() => {
        if (openmenu) {
            document.addEventListener('click', handleClickOutside);
        }

        if (showabout || open || close || generator) {
            UseOpenMenu(false);
        }

        return () => {
            if (openmenu) {
                document.removeEventListener('click', handleClickOutside);
            }
        };
    }, [openmenu, showabout, focus, open, close, generator, handleClickOutside]);

    return { wrapperRef, openmenu, onClickItem };
};

export default SubMenu_Logic;
