import { rawWidget } from "../baseWidget.js";

function _createButton(id, option) {
  var el = document.createElement("button");
  el.textContent = option.label;
  el.type = option.type;
  el.onclick = option.onClick;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createButton = rawWidget(_createButton);
