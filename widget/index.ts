import { CompositeControl } from "./compositeControl.js";
import { Control } from "./control.js";
import { createButton, createCheckbox, createDiv, createForm, createFragment, createH1, createH3, createLi, createSpan, createTextInput, createUl, createTodo } from "./createControl.js";
import { WidgetDict } from "./widgetDict.js";

type WidgetType<TElement> = (id: string, option: Partial<TElement>) => Control<TElement>;
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
