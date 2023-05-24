import { widget } from "./baseWidget.js";

function _createTodo(id, option) {
  this.li(`todoLi-${id}`)
    .append(
      this.checkbox(`todoCheck-${id}`, {
        checked: option.checked,
        onChange: option.onCheckChange,
      })
    )
    .append(this.span(`todoSpan-${id}`, { label: option.value }))
    .append(
      this.button(`todoBtn-${id}`, {
        label: "삭제",
        type: "button",
        onClick: option.onDelClick,
      })
    );

  return {
    id: id,
    getEl: function () {
      return this.get(`todoLi-${id}`).getEl();
    }.bind(this),
    children: [
      this.get(`todoLi-${id}`),
      this.get(`todoCheck-${id}`),
      this.get(`todoSpan-${id}`),
      this.get(`todoBtn-${id}`),
    ],
  };
}

export var createTodo = widget(_createTodo);
