import { getFormData } from "./utils.js";

const { Widget } = window;

interface Todo {
  id: string,
  contents: string,
  done: boolean,
}
const todoList: Todo[] = [];

function handleDelClick(this: { todo: Todo }) {
  todoList.splice(todoList.indexOf(this.todo), 1);
  this.todo.done ? renderDoneList() : renderTodoList();
}

function handleCheckChange(this: { todo: Todo }, e: Event) {
  this.todo.done = (e.target as HTMLInputElement).checked;
  renderTodoList();
  renderDoneList();
}

function renderList(listControl: Control<HTMLUListElement>, list: Todo[]) {
  listControl.innerHTML("");

  list.forEach(function (todo: Todo) {
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

export function handleTodoSubmit(e: SubmitEvent) {
  e.preventDefault();

  const { todoValue } = getFormData(e.target as HTMLFormElement);

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
