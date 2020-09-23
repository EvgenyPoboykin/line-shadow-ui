const fs = require('fs');

const { ipcMain, dialog } = require('electron');
const sharp = require('sharp');

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

    ipcMain.on('get-data-image-electron', (e, base_) => {
        const buf = new Buffer.from(base_.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64');
        sharp(buf)
            .metadata()
            .then((meta) => {
                // console.log(meta);

                let ppi = meta.density;
                let width = meta.width;
                let height = meta.height;
                let format = meta.format;
                let space = meta.space;
                let icc = meta.icc;

                // console.log(icc, icc.toString());

                win.send('get-data-image-react', ppi, width, height, format, space, icc, icc.toString());
            });
    });

    const ShowDialogSaveAs = (optionsSaveAs) => {
        return new Promise((resolve) => {
            dialog.showSaveDialog(win, optionsSaveAs).then((file) => {
                // file.filePath = абсолютный путь до файла картинки
                if (file.canceled) return;

                resolve(file);
            });
        });
    };
    const SaveImage = (filePath, data, count, fp, type) => {
        return new Promise((resolve) => {
            // запись файла / путь / буфер / кодировка
            fs.writeFile(filePath, data, 'base64', function () {
                // Отправляем абсолютный путь в React для записи в стэйт app.save
                win.send('stop-save-file', filePath, fp, count, type);
                resolve();
            });
        });
    };

    const CovertBuffer = (buf, compess) => {
        return new Promise((resolve) => {
            sharp(buf)
                .toColourspace('cmyk')
                .tiff({
                    compression: compess,
                    quality: 100,
                })
                .toBuffer((err, data, info) => {
                    resolve(data);
                });
        });
    };

    const GetBuffer = (layers) => {
        return new Promise((resolve) => {
            const raw_image = new Buffer.from(layers.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64');
            resolve(raw_image);
        });
    };
    const CheckBuffer = (raw_image) => {
        return new Promise((resolve) => {
            if (raw_image === null) return;
            resolve(raw_image);
        });
    };

    ipcMain.on('save-file', (e, layers, ppi, name, compess, count, save, type) => {
        // Настройки сохранить как
        let optionsSaveAs = {
            title: 'Save as',
            filters: [{ name: 'tiff pictures', extensions: ['tiff'] }], // тип файлов для сохранения
            defaultPath: `${name.split('.', 2)[0]}-${count}-CMYK-LS.tiff`, // название файла
        };

        // require('events').EventEmitter.defaultMaxListeners = Infinity;

        GetBuffer(layers)
            .then((raw) => CheckBuffer(raw))
            .then((raw) => {
                CovertBuffer(raw, compess).then((dataImage) => {
                    if (type === 'save-as' && save === null) {
                        ShowDialogSaveAs(optionsSaveAs)
                            .then((file) =>
                                SaveImage(file.filePath, dataImage, count + 1, file.filePath.toString(), type)
                            )
                            .then(() => console.log('file saved'));
                    } else if (type === 'save' && save !== null) {
                        SaveImage(save, dataImage, 0, null, type).then(() => console.log('file saved'));
                    } else {
                        return;
                    }
                });
            });
    });
    // load settings app ----------------------------------------------------------------------------------------- >
};
