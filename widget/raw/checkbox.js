import { rawWidget } from "../baseWidget.js";

function _createCheckbox(id, option) {
  var el = document.createElement("input");
  el.type = "checkbox";
  el.checked = option.checked;
  el.onchange = option.onChange;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createCheckbox = rawWidget(_createCheckbox);
