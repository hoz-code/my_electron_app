const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

console.log('im concole path'); ////////
///console.log(path); //////////
console.log(__dirname);
console.log(__filename);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '\\preload.js')
        }
    });

    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});




app.on('window-all-closed', () => {
    if (process.plataform !== 'darwin') {
        app.quit();
    }
});