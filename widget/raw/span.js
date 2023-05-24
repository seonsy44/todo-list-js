import { rawWidget } from "../baseWidget.js";

function _createSpan(id, option) {
  var el = document.createElement("span");
  el.textContent = option.label;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createSpan = rawWidget(_createSpan);
