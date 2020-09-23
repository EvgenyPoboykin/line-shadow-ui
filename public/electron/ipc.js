const { ipcMain } = require('electron');

exports.ipc = (win, app) => {
    ipcMain.on('maximize', (e) => {
        win.maximize();
    });
    ipcMain.on('minimize', (e) => {
        win.minimize();
    });
    ipcMain.on('maximum', (e) => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
    });

    ipcMain.on('close', (e) => {
        app.quit();
    });

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    // load settings app ----------------------------------------------------------------------------------------- >
};
