export function getFormData(form: HTMLFormElement): Record<string, FormDataEntryValue> {
  const data = new FormData(form);
  const result = {};
  for (const [key, value] of data.entries()) {
    result[key] = value;
  }

  return result;
}
