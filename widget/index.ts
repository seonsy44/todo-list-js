import { Control } from "./control.js";
import { WidgetDict } from "./widgetDict.js";

type WidgetType<TElement> = (id: string, option: Partial<TElement>) => Control<TElement>;
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
    get: (id: string) => Control<HTMLElement>;
  };
};

function createControl<TElement>(tagName: keyof HTMLElementTagNameMap | "fragment", _option?: Partial<TElement>) {
  return (id: string, option: Partial<TElement> = {}) => new Control(id, tagName, { ...option, ..._option });
}

window.Widget = {
  fragment: createControl<DocumentFragment>("fragment"),
  button: createControl<HTMLButtonElement>("button"),
  ul: createControl<HTMLUListElement>("ul"),
  li: createControl<HTMLLIElement>("li"),
  form: createControl<HTMLFormElement>("form"),
  checkbox: createControl<HTMLInputElement>("input", { type: "checkbox" }),
  textInput: createControl<HTMLInputElement>("input", { type: "input" }),
  h1: createControl<HTMLHeadingElement>("h1"),
  h3: createControl<HTMLHeadingElement>("h3"),
  div: createControl<HTMLDivElement>("div"),
  span: createControl<HTMLSpanElement>("span"),
  get: (id: string) => WidgetDict.getControl(id),
};

window.Widget.todo = createTodo.bind(window.Widget);
