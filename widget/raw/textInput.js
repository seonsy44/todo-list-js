export function createTextInput(Dict) {
  function TextInput(id, option) {
    if (Dict[id]) throw new Error(`id: ${id}는 이미 존재`);

    var el = document.createElement("input");
    el.type = "text";
    el.name = option.name;

    Dict[id] = {
      getEl: function () {
        return el;
      },
      focus: function () {
        el.focus();
        return Dict[id];
      },
      setValue: function (value) {
        el.value = value;
        return Dict[id];
      },
    };

    return Dict[id];
  }

  return TextInput;
}
