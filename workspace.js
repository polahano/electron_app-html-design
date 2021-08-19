


var blocklyDiv = document.getElementById("blocklyDiv");
var toolbox = document.getElementById("toolbox");

var workspace = Blockly.inject(blocklyDiv, {
  // plugins: {
  //   'toolbox': ContinuousToolbox,
  //   'flyoutsVerticalToolbox': ContinuousFlyout,
  //   'metricsManager': ContinuousMetrics,
  // },
  toolbox: toolbox,
  media: './node_modules/blockly/media/',
  scrollbars: true,
  trashcan: true,
  sounds: true,
  oneBasedIndex: true,
  zoom: {
    controls: true,
    wheel: false,
    startScale: 0.6,
    maxScale: 2,
    minScale: 0.4,
    scaleSpeed: 1.2
  },
  renderer: "zelos",
});

// enable searching on workspace by using ctrl +f
const workspaceSearch = new WorkspaceSearch(workspace);
workspaceSearch.init();

/**
 * @override
 */
Blockly.VerticalFlyout.prototype.getFlyoutScale = function () {
  return 0.6;
};


  workspace.addChangeListener(function(event) {
    if (event.type == Blockly.Events.SELECTED) {
      if (Blockly.selected == null) {
        document.getElementById('information-pane').style.backgroundColor = '#ccc';
        document.getElementById('information-pane').style.border = "3px solid transparent";

      } else{
        document.getElementById('information-pane').style.backgroundColor = Blockly.selected.getColour();
        document.getElementById('information-pane').style.border = "3px solid yellow";
      }
    }
  });


