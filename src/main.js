import { handleTodoSubmit } from "./todolist.js";

function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "TODO LIST" }))
    .append(
      Widget.form("todoForm", { onSubmit: handleTodoSubmit })
        .append(
          Widget.div("inputContaier")
            .append(Widget.textInput("todoInput", { name: "todoValue" }))
            .append(
              Widget.button("submitBtn", { type: "submit", label: "입력" })
            )
        )
        .append(Widget.h3("todoListTitle", { textContent: "TODO" }))
        .append(Widget.ul("todoList"))
        .append(Widget.h3("doneListTitle", { textContent: "DONE" }))
        .append(Widget.ul("doneList"))
    );

  document.body.append(Widget.get("fragment").getEl());
}

render();
