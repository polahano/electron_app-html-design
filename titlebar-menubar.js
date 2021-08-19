const customTitlebar = require('custom-electron-titlebar');

let newTitlebar = new customTitlebar.Titlebar({
  icon: './assets/logos/Image Lab Icon.png',
  menuPosition: 'bottom',
  titleHorizontalAlignment: 'left',
  title: 'Image Lab',
});