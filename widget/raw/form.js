import { rawWidget } from "../baseWidget.js";

function _createForm(id, option) {
  var el = document.createElement("form");
  el.onsubmit = option.onSubmit;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createForm = rawWidget(_createForm);
