const { app, globalShortcut, BrowserWindow, dialog } = require('electron');
const robot = require("robotjs");
var cmd=require('node-cmd');

app.on('ready', () => {

  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile('src/index.html');

});


const { ipcMain } = require('electron')
ipcMain.on('xiaobei', (event, arg) => {
  if (arg === 'dialog') {
    dialog.showMessageBox({
      title: '小贝',
      message: '小贝，你长这么好看，你说什么都对！',
      buttons: []
    })
  }
  if (arg === 'voice') {
    cmd.run('mshta vbscript:createobject("sapi.spvoice").speak("小贝，你长这么好看，你说什么都对！")(window.close)')
  }
})