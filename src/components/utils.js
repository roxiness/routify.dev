export const storeVarToUrl = storeName => storeName.replace(/\$/, "")
  .split(/(?=[A-Z])/)
  .map((x) => x.toLowerCase())
  .join("-");
