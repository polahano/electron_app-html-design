'use strict';

console.log("main process working");

const electron = require("electron");
const { app, BrowserWindow } = electron;

app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }, height: 900, width: 1600, minHeight:700, roundedCorners:true, show: false
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });

    mainWindow.on('closed', function () {

        mainWindow = null;
    })
});

