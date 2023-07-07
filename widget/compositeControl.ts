import { Control } from "./control";

export class CompositeControl<THtmlElement> extends Control<THtmlElement> {
  private children: Record<string, HTMLElement>

  constructor(id: string, tagName: keyof HTMLElementTagNameMap, option?: Partial<THtmlElement>) {
    super(id, tagName, option);

    this.children = {}
  }

  add<TSubHtmlElement>(id:string, tagName: keyof HTMLElementTagNameMap, option: Partial<TSubHtmlElement>) {
      const el = document.createElement(tagName);
      Object.entries(option).forEach(([key, value]) => {
        el[key] = value;
      });

      this.el.append(el);
      this.children[id] = el;

      return this;
  }
}
