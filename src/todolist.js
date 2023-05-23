import { getFormData } from "./utils.js";

var todoList = [];

function deleteTodoOnWidget(id) {
  Widget.del(id);
  Widget.del(`todoCheck-${id}`);
  Widget.del(`todoSpan-${id}`);
  Widget.del(`todoBtn-${id}`);
}

function renderList(listControl, condition) {
  listControl.innerHTML("");

  todoList.filter(condition).forEach(function (todo) {
    deleteTodoOnWidget(todo.id);
    listControl.append(
      Widget.todo(todo.id, {
        value: todo.contents,
        checked: todo.done,
        onDelClick: function () {
          todoList.splice(todoList.indexOf(todo), 1);
          todo.done ? renderDoneList() : renderTodoList();
        },
        onCheckChange: function (e) {
          todo.done = e.target.checked;
          renderTodoList();
          renderDoneList();
        },
      })
    );
  });
}

function renderDoneList() {
  renderList(Widget.get("doneList"), function (todo) {
    return todo.done;
  });
}

function renderTodoList() {
  renderList(Widget.get("todoList"), function (todo) {
    return !todo.done;
  });
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
  Widget.get("todoInput").setValue("").focus();
}
