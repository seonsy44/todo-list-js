export interface Control<THtmlElement> {
  append(childControl: Control<THtmlElement>): Control<THtmlElement>;
  appended(parentEl: HTMLElement | DocumentFragment): void;
  remove(): void;
  update(option: Partial<THtmlElement>): void;
}
