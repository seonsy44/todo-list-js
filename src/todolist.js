import { getFormData } from "./utils.js";

var todoList = [];

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
        value: todo.contents,
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

  var formData = getFormData(e.target);
  if (!formData.todoValue.length) {
    alert("todo를 입력해주세요.");
    return;
  }

  todoList.push({
    id: crypto.randomUUID(),
    contents: formData.todoValue,
    done: false,
  });

  renderTodoList();
  Widget.get("todoInput").setValue("");
  Widget.get("todoInput").focus();
}
