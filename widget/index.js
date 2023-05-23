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

var WidgetDict = {};

window.Widget = {
  fragment: createFragment(WidgetDict),
  button: createButton(WidgetDict),
  ul: createUl(WidgetDict),
  li: createLi(WidgetDict),
  form: createForm(WidgetDict),
  checkbox: createCheckbox(WidgetDict),
  textInput: createTextInput(WidgetDict),
  div: createDiv(WidgetDict),
  span: createSpan(WidgetDict),
  h1: createH1(WidgetDict),
  h3: createH3(WidgetDict),
  get: function (widgetId) {
    return WidgetDict[widgetId];
  },
  del: function (widgetId) {
    delete WidgetDict[widgetId];
  },
};

window.Widget.todo = createTodo.call(window.Widget, WidgetDict);
