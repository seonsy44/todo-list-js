import { rawWidget } from "../baseWidget.js";

function _createTextInput(id, option) {
  var el = document.createElement("input");
  el.type = "text";
  el.name = option.name;

  return {
    id: id,
    getEl: function () {
      return el;
    },
    focus: function () {
      el.focus();
    },
    setValue: function (value) {
      el.value = value;
    },
  };
}

export var createTextInput = rawWidget(_createTextInput);
