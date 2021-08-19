"use strict";

console.log("main process working");

const electron = require("electron");
const { app, BrowserWindow, Menu } = electron;


let splash;

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    height: 800,
    width: 1500,
    minWidth: 1100,
    minHeight: 800,
    show: false,
    icon: __dirname + '/assets/logos/Image Lab Icon.png',
     frame: false,
    titleBarStyle: 'hidden',
  });

  splash = new BrowserWindow({
    width: 600,
    height: 400,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: __dirname + '/assets/logos/Image Lab Icon.png',
  });
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once("ready-to-show", () => {
    setTimeout(function () {
      splash.destroy();
      mainWindow.show();
    }, 3000);
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
});




const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [{label:'New File'},{label:'Open File'},
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },  
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label:'Tutorials'
      },
      {
        label:'About',
      },
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/scorelab/imagelab')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)