export function createUl(Dict) {
  function Ul(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("ul");

    el.style.listStyle = "none";
    el.style.padding = "0";

    Dict[id] = {
      getEl: function () {
        return el;
      },
      append: function (childControl) {
        el.append(childControl.getEl());
        return Dict[id];
      },
      innerHTML: function (string) {
        el.innerHTML = string;
        return Dict[id];
      },
    };

    return Dict[id];
  }

  return Ul;
}
