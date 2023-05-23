import { handleTodoSubmit } from "./todolist.js";

function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "TODO LIST" }))
    .append(Widget.form("todoForm", { onSubmit: handleTodoSubmit }));

  Widget.get("todoForm")
    .append(Widget.div("inputContaier"))
    .append(Widget.h3("todoListTitle", { textContent: "TODO" }))
    .append(Widget.ul("todoList"))
    .append(Widget.h3("doneListTitle", { textContent: "DONE" }))
    .append(Widget.ul("doneList"));

  Widget.get("inputContaier")
    .append(Widget.textInput("todoInput", { name: "todoValue" }))
    .append(Widget.button("submitBtn", { type: "submit", label: "입력" }));

  document.body.append(Widget.get("fragment").getEl());
}

render();
