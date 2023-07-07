import { CompositeControl } from "./compositeControl";
import { Control } from "./control";

// 단일 control
function createControl<TElement extends DocumentFragment | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>(tagName: keyof HTMLElementTagNameMap | "fragment", _option?: Partial<TElement>) {
    return (id: string, option: Partial<TElement> = {}) => new Control<TElement>(id, tagName, { ...option, ..._option });
}

export const createFragment = createControl<DocumentFragment>("fragment")
export const createButton = createControl<HTMLButtonElement>("button")
export const createUl = createControl<HTMLUListElement>("ul")
export const createLi = createControl<HTMLLIElement>("li")
export const createForm = createControl<HTMLFormElement>("form")
export const createCheckbox = createControl<HTMLInputElement>("input", { type: "checkbox" })
export const createTextInput = createControl<HTMLInputElement>("input", { type: "input" })
export const createH1 = createControl<HTMLHeadingElement>("h1")
export const createH3 = createControl<HTMLHeadingElement>("h3")
export const createDiv = createControl<HTMLDivElement>("div")
export const createSpan = createControl<HTMLSpanElement>("span")


// 합성 control
export const createTodo = (id: string, option?: {checked: boolean, onCheckChange?: (e: Event) => any, todoContent: string, onDelClick?: (e: Event) => any}) => {
    return new CompositeControl<HTMLLIElement>(id, "li")
        .add<HTMLInputElement>(`${id}-input`, "input", { type: "checkbox", checked: option?.checked, onchange: option?.onCheckChange })
        .add<HTMLSpanElement>(`${id}-span`, "span", {textContent: option?.todoContent})
        .add<HTMLButtonElement>(`${id}-button`, "button", {textContent: "삭제", type: "button", onclick: option?.onDelClick})
}