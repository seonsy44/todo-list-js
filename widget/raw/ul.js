import { rawWidget } from "../baseWidget.js";

function _createUl(id, option) {
  var el = document.createElement("ul");

  el.style.listStyle = "none";
  el.style.padding = "0";

  return {
    id: id,
    getEl: function () {
      return el;
    },
    innerHTML: function (string) {
      el.innerHTML = string;
    },
  };
}

export var createUl = rawWidget(_createUl);
