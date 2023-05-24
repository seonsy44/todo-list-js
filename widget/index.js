import {
  createFragment,
  createButton,
  createUl,
  createLi,
  createForm,
  createCheckbox,
  createTextInput,
  createDiv,
  createH1,
  createSpan,
  createH3,
} from "./raw/index.js";
import { createTodo } from "./todo.js";
import { getControl } from "./core.js";

window.Widget = {
  fragment: createFragment,
  button: createButton,
  ul: createUl,
  li: createLi,
  form: createForm,
  checkbox: createCheckbox,
  textInput: createTextInput,
  div: createDiv,
  span: createSpan,
  h1: createH1,
  h3: createH3,
  get: getControl,
};

window.Widget.todo = createTodo.bind(window.Widget);
