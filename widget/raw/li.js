export function createLi(Dict) {
  function Li(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("li");

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

  return Li;
}
