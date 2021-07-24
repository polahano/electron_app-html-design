"use strict";

console.log("main process working");

const electron = require("electron");
const { app, BrowserWindow } = electron;

let splash;

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    height: 800,
    width: 1600,
    minHeight: 700,
    roundedCorners: true,
    show: false,
  });
  splash = new BrowserWindow({
    width: 600,
    height: 400,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once("ready-to-show", () => {
    setTimeout(function(){      
        splash.destroy();
        mainWindow.show();
    }, 4000);
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
});
