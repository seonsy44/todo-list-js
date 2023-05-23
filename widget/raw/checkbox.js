export function createCheckbox(Dict) {
  function Checkbox(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("input");
    el.type = "checkbox";
    el.checked = option.checked;
    el.onchange = option.onChange;

    Dict[id] = {
      getEl: function () {
        return el;
      },
    };

    return Dict[id];
  }

  return Checkbox;
}
