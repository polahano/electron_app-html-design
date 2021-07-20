'use strict';

console.log("main process working");

const electron = require("electron");
const { app, BrowserWindow } = electron;

let splash

app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }, height: 900, width: 1600, minHeight: 700, roundedCorners: true, show: false
    });
    splash = new BrowserWindow({ width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true });
    splash.loadURL(`file://${__dirname}/splash.html`);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
   
    mainWindow.once("ready-to-show", () => {
        splash.destroy();
        mainWindow.show();
    });

    mainWindow.on('closed', function () {

        mainWindow = null;
    })
});

