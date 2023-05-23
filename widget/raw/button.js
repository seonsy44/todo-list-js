export function createButton(Dict) {
  function Button(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("button");
    el.textContent = option.label;
    el.type = option.type;
    el.onclick = option.onClick;

    Dict[id] = {
      getEl: function () {
        return el;
      },
    };

    return Dict[id];
  }

  return Button;
}
