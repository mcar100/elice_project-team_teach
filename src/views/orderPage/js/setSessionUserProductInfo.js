// const orderBtn = document.querySelector('.final-confirmation-quantity-outer');
import * as session from '../../webStorage/js/sessionStorage.js';

const setSession = (userProductInfo) => {
  session.setSession('userProductInfo', JSON.stringify(userProductInfo));
};

export default setSession;
