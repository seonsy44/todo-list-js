import { getFormData } from "./utils.js";
import type { CompositeControl } from "./types/CompositeControl.js";
import type { Control } from "./types/Control.js";

type WidgetType<TElement> = (id: string, option?: Partial<TElement>) => Control<TElement>;
type CompositeWidgetType<TElement, TOption> = (id: string, option: TOption) => CompositeControl<TElement>
type TodoOptionType = { 
  checked: boolean;
  onCheckChange?: ((e: Event) => any) | undefined;
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

const todoList: {
    id: string,
    contents: string,
    done: boolean,
  }[] = [];

function handleDelClick() {
  todoList.splice(todoList.indexOf(this.todo), 1);
  this.todo.done ? renderDoneList() : renderTodoList();
}

function handleCheckChange(e) {
  this.todo.done = e.target.checked;
  renderTodoList();
  renderDoneList();
}

function renderList(listControl, list) {
  listControl.innerHTML("");

  list.forEach(function (todo) {
    if (Widget.get(todo.id)) Widget.get(todo.id).remove();

    listControl.append(
      Widget.todo(todo.id, {
        todoContent: todo.contents,
        checked: todo.done,
        onDelClick: handleDelClick.bind({ todo: todo }),
        onCheckChange: handleCheckChange.bind({ todo: todo }),
      })
    );
  });
}

function renderDoneList() {
  renderList(
    Widget.get("doneList"),
    todoList.filter(function (todo) {
      return todo.done;
    })
  );
}

function renderTodoList() {
  renderList(
    Widget.get("todoList"),
    todoList.filter(function (todo) {
      return !todo.done;
    })
  );
}

export function handleTodoSubmit(e) {
  e.preventDefault();

  const { todoValue } = getFormData(e.target);

  if (typeof todoValue === "string") {
    if (!todoValue.length) {
      alert("todo를 입력해주세요.");
      return;
    }

    todoList.push({
      id: crypto.randomUUID(),
      contents: todoValue,
      done: false,
    });
  }

  renderTodoList();
  Widget.get("todoInput").setValue("");
  Widget.get("todoInput").focus();
}
