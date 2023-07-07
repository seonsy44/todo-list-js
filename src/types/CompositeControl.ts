import { Control } from "./Control";

export interface CompositeControl<THtmlElement> extends Control<THtmlElement> {
    add<TSubHtmlElement>(id:string, tagName: keyof HTMLElementTagNameMap, option: Partial<TSubHtmlElement>): Control<THtmlElement>
  }
  