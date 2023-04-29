import * as session from '../../webStorage/js/sessionStorage.js';

const setTokenToSessionStorage = (key, value) => {
  session.setToken(String(key), String(value));
};

export { setTokenToSessionStorage };
