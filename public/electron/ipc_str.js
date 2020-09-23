const fs = require('fs');
const { ipcMain, dialog } = require('electron');
const sharp = require('sharp');
const { count } = require('console');

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

    ipcMain.once('save-file', (e, layers, ppi, name, icc, compess, count, save, type) => {
        // создание картинки в буфере
        const buf = new Buffer.from(layers.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64');

        if (buf !== null) {
            // преобразование картинки в тифф
            sharp(buf)
                .toColourspace('cmyk') // цветовая схема cmyk //.withMetadata({ icc: icc }) // с метаданными
                .tiff({
                    compression: compess, // сжатие lzw
                    xres: ppi * 0.0393701, // перевести ppi/мм в ppi/см
                    yres: ppi * 0.0393701, // перевести ppi/мм в ppi/см
                    quality: 100,
                })
                .toBuffer((err, data, info) => {
                    // Настройки сохранить как
                    let optionsSaveAs = {
                        title: 'Save as',
                        filters: [{ name: 'tiff pictures', extensions: ['tiff'] }], // тип файлов для сохранения
                        defaultPath: `${name.split('.', 2)[0]}-${count}-CMYK-LS.tiff`, // название файла
                    };

                    // если путь сохранения равен нулю то Сохранить как
                    if (type === 'save-as') {
                        if (save !== null) return;

                        // вызываем диалоговое окно Сохранить как
                        dialog.showSaveDialog(win, optionsSaveAs).then((file) => {
                            // file.filePath = абсолютный путь до файла картинки
                            if (file.canceled) return;

                            // запись файла / путь / буфер / кодировка
                            fs.writeFile(file.filePath, data, 'base64', function () {
                                // приобразовываем file.filePath в строку (иначе будет возвращаться Emmiter Sender)
                                const fp = file.filePath.toString();
                                let newCount = count + 1;

                                // if (fp && newCount && type) {
                                // Отправляем абсолютный путь в React для записи в стэйт app.save
                                win.send('stop-save-file', fp, newCount, type);
                                // }
                            });
                        });
                    } else if (type === 'close' || type === 'open') {
                        if (save === null) {
                            // вызываем диалоговое окно Сохранить как
                            dialog.showSaveDialog(win, optionsSaveAs).then((file) => {
                                // file.filePath = абсолютный путь до файла картинки
                                if (file.canceled) return;

                                // запись файла / путь / буфер / кодировка
                                fs.writeFile(file.filePath, data, 'base64', function () {
                                    // приобразовываем file.filePath в строку (иначе будет возвращаться Emmiter Sender)
                                    const fp = null;
                                    const newCount = 0;

                                    // Отправляем абсолютный путь в React для записи в стэйт app.save
                                    win.send('stop-save-file', fp, newCount, type);
                                });
                            });
                        } else {
                            // Сохранить
                            // запись файла / абсолютный путь из app.save / буфер / кодировка
                            fs.writeFile(save, data, 'base64', function () {
                                // приобразовываем file.filePath в строку (иначе будет возвращаться Emmiter Sender)
                                const fp = null;
                                const newCount = 0;

                                // Отправляем абсолютный путь в React для записи в стэйт app.save
                                win.send('stop-save-file', fp, newCount, type);
                            });
                        }
                    } else {
                        // Сохранить
                        // запись файла / абсолютный путь из app.save / буфер / кодировка
                        fs.writeFile(save, data, 'base64', function () {
                            let newCount = count;

                            // Отправляем абсолютный путь в React для записи в стэйт app.save
                            win.send('stop-save-file', save, newCount, type);
                        });
                    }
                });
        }
    });
    // load settings app ----------------------------------------------------------------------------------------- >
};
