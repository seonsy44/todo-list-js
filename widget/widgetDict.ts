import type { CompositeControl } from "./compositeControl";
import type { Control } from "./control";

interface IWidgetDict {
  hasControl(id: string): boolean;
  getControl(id: string): Control<HTMLElement> | CompositeControl<HTMLElement>;
  delControl(id: string): void;
  addControl(id: string, control: Control<HTMLElement>): void;
}

class WidgetDictionary implements IWidgetDict {
  private controls: Record<string, Control<HTMLElement> | CompositeControl<HTMLElement>>;

  constructor() {
    this.controls = {};
  }

  hasControl(id: string) {
    return this.controls.hasOwnProperty(id);
  }

  getControl(id: string) {
    return this.controls[id];
  }

  delControl(id: string) {
    delete this.controls[id];
  }

  addControl(id: string, control: Control<HTMLElement> | CompositeControl<HTMLElement>) {
    if (this.hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);
    this.controls[id] = control;
  }
}

export const WidgetDict = new WidgetDictionary();
