export function createH3(Dict) {
  function H3(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("h3");
    el.textContent = option.textContent;

    Dict[id] = {
      getEl: function () {
        return el;
      },
    };

    return Dict[id];
  }

  return H3;
}
