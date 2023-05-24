import { rawWidget } from "../baseWidget.js";

function _createDiv(id, option) {
  var el = document.createElement("div");

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createDiv = rawWidget(_createDiv);
