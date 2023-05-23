export function createTodo(Dict) {
  function Todo(id, option) {
    return this.li(id)
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
  }

  return Todo.bind(this);
}
