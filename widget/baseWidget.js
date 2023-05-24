import { addControl, delControl, getControl, hasControl } from "./core.js";

export function rawWidget(_createControl) {
  var createControl = function (id, option) {
    if (hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);

    var control = _createControl(id, option);

    control.append = function (childControl) {
      control.getEl().append(childControl.getEl());
      return getControl(id);
    };

    control.remove = function (id) {
      control.getEl().remove();
      delControl(id);
    };

    addControl(control.id, control);

    return control;
  };

  return createControl;
}

export function widget(_createControl) {
  var createControl = function (id, option) {
    if (hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);

    var control = _createControl.apply(this, [id, option]);

    control.remove = function () {
      control.children.forEach(function (child) {
        child.getEl().remove();
        delControl(child.id);
      });

      delControl(control.id);
    };

    addControl(control.id, control);

    return control;
  };

  return createControl;
}
