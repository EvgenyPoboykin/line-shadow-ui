import { IStateApp } from './interfaces';

const StateApp: IStateApp = {
    show_about: false,
    confirm_dialog_close: false,
    confirm_dialog_open: false,
    confirm_dialog_generade: false,
    confirm_dialog_rerender: false,
    confirm_dialog_generade_process: 0,

    start_save: 0,
    message_confirm_dialog: '',
    save: null,
};

export default StateApp;
