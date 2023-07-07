import type { CompositeControl } from "./compositeControl";
import type { Control } from "./control";

type WidgetType<TElement extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> = (id: string, option?: Partial<TElement>) => Control<TElement>;
type CompositeWidgetType<TElement extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap], TOption> = (id: string, option?: TOption) => CompositeControl<TElement>
type TodoOptionType = { 
  checked: boolean;
  onCheckChange?: ((e: Event) => any) | undefined;
  todoContent: string;
  onDelClick?: ((e: Event) => any) | undefined;
}

declare global {
  interface Window {
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
  }

  interface Control<THtmlElement extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> {
    new (id: string, tagName: keyof HTMLElementTagNameMap | "fragment", option?: Partial<THtmlElement>): Control;
    append<TControl = Control>(childControl: TControl<HTMLElement>): Control<THtmlElement>;
    appended(parentEl: HTMLElement | DocumentFragment): void;
    remove(): void;
    update(option: Partial<THtmlElement>): void;
    focus(): void;
    setValue(value: string): void;
    innerHTML(value: string): void;
  }  

  interface CompositeControl<THtmlElement extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> extends Control<THtmlElement> {
    new (id: string, tagName: keyof HTMLElementTagNameMap, option?: Partial<THtmlElement>): CompositeControl;
    add<TSubHtmlElement>(id:string, tagName: keyof HTMLElementTagNameMap, option: Partial<TSubHtmlElement>): Control<THtmlElement>
  }
}