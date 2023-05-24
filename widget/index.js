import { createFragment } from "./raw/fragment.js";
import { createButton } from "./raw/button.js";
import { createUl } from "./raw/ul.js";
import { createLi } from "./raw/li.js";
import { createForm } from "./raw/form.js";
import { createCheckbox } from "./raw/checkbox.js";
import { createTextInput } from "./raw/textInput.js";
import { createDiv } from "./raw/div.js";
import { createH1 } from "./raw/h1.js";
import { createSpan } from "./raw/span.js";
import { createTodo } from "./todo.js";
import { createH3 } from "./raw/h3.js";
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
