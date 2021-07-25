/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The toolbox category built during the custom toolbox codelab, in es6.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /**
   * Adds the colour to the toolbox.
   * This is called on category creation and whenever the theme changes.
   * @override
   */
  addColourBorder_() {
    if (document.getElementsByTagName('body').backgroundColor == '#e8f2fc') {
      this.rowDiv_.style.backgroundColor = '#035fbb';
    } else {
      this.rowDiv_.style.backgroundColor = '#1f2b4b';
    }
    // #1f2b4b for darkmode
  }

  /**
   * Sets the style for the category when it is selected or deselected.
   * @param {boolean} isSelected True if the category has been selected, false otherwise.
   * @override
   */
  setSelected(isSelected) {
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = 'white';
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.

      if (document.getElementsByTagName('body').backgroundColor == '#e8f2fc') {
        this.rowDiv_.style.backgroundColor = '#035fbb';
      } else {
        this.rowDiv_.style.backgroundColor = '#1f2b4b';
      }
      // Set the text back to white.
      labelDom.style.color = 'white';
      this.iconDom_.style.color = 'white';
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(/** @type {!Element} */(this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED, isSelected);
  }

}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory, true);
