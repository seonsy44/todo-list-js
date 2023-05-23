export function createSpan(Dict) {
  function Span(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("span");
    el.textContent = option.label;

    Dict[id] = {
      getEl: function () {
        return el;
      },
    };

    return Dict[id];
  }

  return Span;
}
