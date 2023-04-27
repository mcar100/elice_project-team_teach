const urlParams = new URL(location.href).searchParams;

const getUrlParams = (parameter) => urlParams.get(parameter);
export { getUrlParams };
