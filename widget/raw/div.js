export function createDiv(Dict) {
  function Div(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("div");

    Dict[id] = {
      getEl: function () {
        return el;
      },
      append: function (childControl) {
        el.append(childControl.getEl());
        return Dict[id];
      },
    };

    return Dict[id];
  }

  return Div;
}
