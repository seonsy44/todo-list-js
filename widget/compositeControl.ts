import { Control } from "./control";

export class CompositeControl<THtmlElement> extends Control<THtmlElement> {
  constructor(id: string, tagName: keyof HTMLElementTagNameMap, option?: Partial<THtmlElement>) {
    super(id, tagName, option);
  }

  add<TSubHtmlElement>(children: Record<keyof HTMLElementTagNameMap, Partial<TSubHtmlElement>>[]) {
    Object.entries(children).forEach(([tagName, option]) => {
      const el = document.createElement(tagName);
      Object.entries(option).forEach(([key, value]) => {
        el[key] = value;
      });

      this.el.append(el);
    });
  }
}

const todo = new CompositeControl("id", "li").add([{ input: { type: "checkbox" } }]);
