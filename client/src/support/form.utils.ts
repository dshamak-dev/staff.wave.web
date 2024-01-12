export const parseFormFields = <T>(formElement: HTMLFormElement) => {
  const data: Record<string, any> = new FormData(formElement);
  const fields: Record<string, any> = {};

  const applyStep = (iterator: any) => {
    if (!iterator || !iterator.next) {
      return null;
    }

    const res = iterator.next();

    if (res.value) {
      fields[res.value[0]] = res.value[1];
    }

    return res;
  };

  let iterator = data.entries();
  let step = applyStep(iterator);

  while (step && !step.done) {
    step = applyStep(iterator);
  }

  return fields as T;
};
