import { createButton, createCheckbox, createDiv, createForm, createFragment, createH1, createH3, createLi, createSpan, createTextInput, createUl, createTodo } from "./createControl.js";
import { WidgetDict } from "./widgetDict.js";

window.Widget = {
  fragment: createFragment,
  button: createButton,
  ul: createUl,
  li: createLi,
  form: createForm,
  checkbox: createCheckbox,
  textInput: createTextInput,
  h1: createH1,
  h3: createH3,
  div: createDiv,
  span: createSpan,
  todo: createTodo,
  get: (id: string) => WidgetDict.getControl(id),
};
