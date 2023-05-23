export function createH1(Dict) {
  function H1(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("h1");
    el.textContent = option.textContent;

    Dict[id] = {
      getEl: function () {
        return el;
      },
    };

    return Dict[id];
  }

  return H1;
}
