import { handleTodoSubmit } from "./todolist.js";
import type { Control } from "./types/Control";

type WidgetType<TElement> = (id: string, option?: Partial<TElement>) => Control<TElement>;
declare var window: Window & {
  Widget: {
    fragment: WidgetType<DocumentFragment>;
    button: WidgetType<HTMLButtonElement>;
    ul: WidgetType<HTMLUListElement>;
    li: WidgetType<HTMLLIElement>;
    form: WidgetType<HTMLFormElement>;
    checkbox: WidgetType<HTMLInputElement>;
    textInput: WidgetType<HTMLInputElement>;
    h1: WidgetType<HTMLHeadingElement>;
    h3: WidgetType<HTMLHeadingElement>;
    div: WidgetType<HTMLDivElement>;
    span: WidgetType<HTMLSpanElement>;
    get: (id: string) => Control<HTMLElement>;
  };
};
const { Widget } = window;

function render() {
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
