const path = require('path');
const electron = require('electron');
const Emmiter = require('events').EventEmitter;

const { app } = electron;

const { CreateWin } = require(path.join(__dirname, './window.js'));

var SaveFile = new Emmiter();
SaveFile.getMaxListeners(0);

app.commandLine.appendSwitch('js-flags', '--max-old-space-size=8192');

app.on('ready', () => {
    CreateWin(app);
});
