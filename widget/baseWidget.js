import { addControl, getControl } from "./core";

export function widget(createControl) {
  var control = function () {
    return createControl(arguments);
  };

  if (getControl(control.id)) throw new Error(`id: ${control.id}는 이미 존재`);
  addControl(control.id, control);

  return control;
}
