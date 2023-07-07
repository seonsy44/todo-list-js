import { Control } from "./control";
import { WidgetDict } from "./widgetDict";

export class CompositeControl<THtmlElement extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> extends Control<THtmlElement> {
  constructor(id: string, tagName: keyof HTMLElementTagNameMap, option?: Partial<THtmlElement>) {
    super(id, tagName, option);
  }

  add<TSubHtmlElement  extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>(id:string, tagName: keyof HTMLElementTagNameMap, option: Partial<TSubHtmlElement>) {
    const childControl = new Control<TSubHtmlElement>(id, tagName, option)
    WidgetDict.addControl(id, childControl);

    childControl.appended(this.el);

    return this;
  }
}
