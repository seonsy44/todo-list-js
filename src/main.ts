import { handleTodoSubmit } from "./todolist.js";

const { Widget } = window;

function render(): void {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "TODO LIST" }))
    .append(
      Widget.form("todoForm", { onsubmit: handleTodoSubmit })
        .append(
          Widget.div("inputContaier")
            .append(Widget.textInput("todoInput", { name: "todoValue" }))
            .append(Widget.button("submitBtn", { type: "submit", textContent: "입력" }))
        )
        .append(Widget.h3("todoListTitle", { textContent: "TODO" }))
        .append(Widget.ul("todoList"))
        .append(Widget.h3("doneListTitle", { textContent: "DONE" }))
        .append(Widget.ul("doneList"))
    )
    .appended(document.body);
}

render();
