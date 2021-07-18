
Blockly.HSV_SATURATION = 0.8// 0 (inclusive) to 1 (exclusive), defaulting to 0.45
Blockly.HSV_VALUE = 0.7// 0 (inclusive) to 1 (exclusive), defaulting to 0.65



var blocklyDiv = document.getElementById("blocklyDiv");
var toolbox = document.getElementById("toolbox");

var workspace = Blockly.inject(blocklyDiv, {
  plugins: {
    'toolbox': ContinuousToolbox,
    'flyoutsVerticalToolbox': ContinuousFlyout,
    'metricsManager': ContinuousMetrics,
  },
  toolbox: toolbox,
  media: 'https://blockly-demo.appspot.com/static/media/',
  scrollbars: true,
  trashcan: true,
  sounds: true,
  oneBasedIndex: true,
  zoom: {
    controls: true,
    wheel: false,
    startScale: 0.7,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  },
  renderer: "zelos",
});

