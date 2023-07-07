export function getFormData(form: HTMLFormElement): Record<string, FormDataEntryValue> {
  const data = new FormData(form);
  const result: Record<string, FormDataEntryValue> = {};
  for (const [key, value] of Object.entries(data)) {
    result[key] = value;
  }

  return result;
}
