import { WidgetDict } from "./widgetDict";
export class Control<THtmlElement> {
  id: string;
  protected el: HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | DocumentFragment;

  constructor(id: string, tagName: keyof HTMLElementTagNameMap | "fragment", option?: Partial<THtmlElement>) {
    if (tagName === "fragment") {
      this.el = document.createDocumentFragment();
      return this;
    }

    this.el = document.createElement(tagName);
    if (option) this.update(option);
    WidgetDict.addControl(id, this);
  }

  append(childControl: Control<HTMLElement>) {
    childControl.appended(this.el);

    return this;
  }

  appended(parentEl: HTMLElement | DocumentFragment) {
    parentEl.append(this.el);
  }

  remove() {
    if (!(this.el instanceof DocumentFragment)) {
      this.el.remove();
      WidgetDict.delControl(this.id);
    }
  }

  update(option: Partial<THtmlElement>) {
    Object.entries(option).forEach(([key, value]) => {
      this.el[key] = value;
    });
  }

  focus() {
    if(!(this.el instanceof DocumentFragment))
      this.el.focus();
  }

  setValue(value: string) {
    if(this.el instanceof HTMLInputElement || this.el instanceof HTMLButtonElement || this.el instanceof HTMLLIElement || this.el instanceof HTMLOptionElement)
      this.el.value = value
  }
}