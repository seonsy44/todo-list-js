import { handleTodoSubmit } from "./todolist.js";
import type { CompositeControl } from "./types/CompositeControl";
import type { Control } from "./types/Control";

type WidgetType<TElement> = (id: string, option?: Partial<TElement>) => Control<TElement>;
type CompositeWidgetType<TElement, TOption> = (id: string, option: TOption) => CompositeControl<TElement>
type TodoOptionType = { 
  checked: boolean;
  onCheckchange?: ((e: Event) => any) | undefined;
  todoContent: string;
  onDelClick?: ((e: Event) => any) | undefined;
}

declare var window: {
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
    todo: CompositeWidgetType<HTMLLIElement, TodoOptionType>;
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
