import { useRef, useState, useCallback, useEffect } from 'react';

import {
    StateApp,
    StatePicture,
    StateInterface,
    StateInterfaceDefault,
    StateInterfaceValue,
    rerender_fragment,
    IStateApp,
    IStatePicture,
    IStateInterface,
    IStateInterfaceValue,
} from '../state';

import { CanvasLogic, ImportImageLogic } from './app';

const { ipcRenderer } = window.require('electron');

function LogicApp() {
    const [app, UseAppState] = useState<IStateApp>(StateApp);
    const [picture, UsePictureState] = useState<IStatePicture>(StatePicture);
    const [interface_app, UseInterfaceState] = useState<IStateInterface>(StateInterface);
    const [interface_default, UseInterfaceDefaultState] = useState<IStateInterface>(StateInterfaceDefault);
    const [interface_value] = useState<IStateInterfaceValue>(StateInterfaceValue);

    const inputRef = useRef<any>(null);
    const inputData = useRef<any>(null);

    const [ConvertGridstoTiff] = CanvasLogic(app, interface_app, picture);
    const [onChangeFile] = ImportImageLogic(
        ipcRenderer,
        UsePictureState,
        UseInterfaceState,
        UseInterfaceDefaultState,
        UseAppState,
        inputRef,
        inputData,
        interface_app
    );

    // закрыть картинку и обнулить Stat`ы
    const onClickCloseFile = useCallback(() => {
        UseAppState((prev: any) => ({ ...prev, confirm_dialog_close: true }));
    }, [UseAppState]);

    const onClickOpenFile = useCallback(() => {
        UseAppState((prev: any) => ({ ...prev, confirm_dialog_open: true }));
    }, [UseAppState]);

    // нажатие Cancel в далоговом окне (предупреждение о закрытие картинки)
    const ConfirmDialogWindowCancel = useCallback(
        (func) => {
            UseAppState((prev: any) => ({ ...prev, [`confirm_dialog_${func}`]: false }));
        },
        [UseAppState]
    );

    const ResetStatesPromise = () => {
        return new Promise((resolve, reject) => {
            UsePictureState(StatePicture);
            UseInterfaceState(StateInterface);
            UseInterfaceDefaultState(StateInterfaceDefault);
            UseAppState(StateApp);
            console.log('ResetStatesPromise');
            resolve();
        });
    };
    const ClickInputPromise = () => {
        return new Promise((resolve, reject) => {
            inputRef!.current.click();
            console.log('ClickInputPromise');
            resolve();
        });
    };

    const RerenderWin = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                UseAppState((prev: any) => ({ ...prev, confirm_dialog_rerender: true }));

                resolve();
            }, 30);
        });
    };

    const SaveNull = () => {
        return new Promise((resolve) => {
            UseAppState((prev: any) => ({ ...prev, start_save: app.start_save + 1, save: null }));
            resolve();
        });
    };

    const onClickSave = () => {
        RerenderWin().then(() => ConvertGridstoTiff('save-as'));
    };

    const ConfirmDialogWindowYes = (func: string) => {
        if (func === 'close') {
            RerenderWin().then(() => ConvertGridstoTiff(func));
        } else {
            RerenderWin().then(() => ConvertGridstoTiff(func));
        }
    };

    const ConfirmDialogWindowNo = (func: string) => {
        if (func === 'close') {
            ResetStatesPromise();
        } else {
            ResetStatesPromise().then(() => ClickInputPromise());
        }
    };

    const onClickFromToMenu = (name: string) => {
        if (name === 'open-from-top-menu' && picture.image_url !== null) {
            onClickOpenFile();
        } else if (name === 'open-from-top-menu' && picture.image_url === null) {
            ClickInputPromise();
        } else if (name === 'save-from-top-menu' && picture.image_url !== null) {
            SaveNull()
                .then(() => RerenderWin())
                .then(() => ConvertGridstoTiff('save'));
        } else if (name === 'save-as-from-top-menu' && picture.image_url !== null) {
            SaveNull()
                .then(() => RerenderWin())
                .then(() => ConvertGridstoTiff('save-as'));
        } else {
            console.log(`AppLogic (151) ${name}`);
        }
    };

    const ShortCutsProgram = (e: KeyboardEvent) => {
        e.preventDefault();

        if ((e.ctrlKey || e.metaKey) && e.keyCode === 79) {
            // console.log('AppLogic (156) ctrl + O Open');
            if (picture.image_url !== null) {
                onClickOpenFile();
            } else {
                ClickInputPromise();
            }
        } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 83) {
            // console.log('AppLogic (156) ctrl + shift + S Save as');
            SaveNull()
                .then(() => RerenderWin())
                .then(() => ConvertGridstoTiff('save-as'));
        } else if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
            // console.log('AppLogic (158) ctrl + S Save');
            RerenderWin().then(() => ConvertGridstoTiff('save'));
        } else if ((e.ctrlKey || e.metaKey) && e.keyCode === 81) {
            // console.log('AppLogic (160) ctrl +  + Q Quit');
            ipcRenderer.send('close');
        }
    };

    useEffect(() => {
        ipcRenderer.on('stop-save-file', (e: any, filePath: string, count: number, type: string) => {
            if (type === 'open') {
                UseAppState((prev: any) => ({
                    ...prev,
                    confirm_dialog_rerender: false,
                    start_save: count,
                    save: filePath,
                }));
                ResetStatesPromise().then(() => ClickInputPromise());
            } else if (type === 'close') {
                UseAppState((prev: any) => ({
                    ...prev,
                    confirm_dialog_rerender: false,
                    start_save: count,
                    save: filePath,
                }));
                ResetStatesPromise();
            } else {
                UseAppState((prev: any) => ({
                    ...prev,
                    confirm_dialog_rerender: false,
                    start_save: count,
                    save: filePath,
                }));
            }
        });
    });

    useEffect(() => {
        const smallfragment = document.querySelector('.SmallPreview__fragment');
        const large = document.querySelector('.Canvas__container');

        if (smallfragment && large) {
            rerender_fragment();
        }
    }, [
        interface_app.canvas_large_width,
        interface_app.canvas_large_height,
        interface_app.ppi,
        interface_app.original_image_width,
        interface_app.original_image_height,
    ]);

    useEffect(() => {
        if (!interface_app.focus) {
            window.addEventListener('keydown', ShortCutsProgram);
        }

        return () => {
            if (!interface_app.focus) {
                window.removeEventListener('keydown', ShortCutsProgram);
            }
        };
    });

    // console.log(app, picture);
    return {
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

        UsePictureState,
        onChangeFile,
        onClickCloseFile,
        onClickSave,
        ShortCutsProgram,
        onClickFromToMenu,
        ConfirmDialogWindowYes,
        ConfirmDialogWindowNo,
        ConfirmDialogWindowCancel,
    };
}

export default LogicApp;
