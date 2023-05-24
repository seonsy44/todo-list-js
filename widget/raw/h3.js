import { rawWidget } from "../baseWidget.js";

function _createH3(id, option) {
  var el = document.createElement("h3");
  el.textContent = option.textContent;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createH3 = rawWidget(_createH3);
