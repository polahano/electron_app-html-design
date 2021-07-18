Blockly.Extensions.register('my_button_extension', function () {
    this.getField('MY_ICON_BUTTON').clickHandler_ = (() => {
      // var fileSelector = document.createElement('input');
      // fileSelector.setAttribute('type', 'file');
      // fileSelector.click();
      /*var input = document.getElementById('testInput');
      input.click();*/
      var output = document.getElementById('testOutput');
      output.click();
      })
    });