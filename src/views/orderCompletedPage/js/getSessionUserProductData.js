import * as session from '../../webStorage/js/sessionStorage.js';
import * as components from './components.js';
import * as replacer from './replaceComponents.js';

const userProductData = JSON.parse(session.getProduct('userProductInfo'));
const orderInfoComponent = replacer.replaceOrderInfoComponent(
  components.orderDateAndNumber,
  userProductData
);
const userInfoComponent = replacer.replaceUserComponent(
  components.userInfo,
  userProductData
);
const paymentInfoComponent = replacer.replaceProductComponents(
  components.paymentInfo,
  userProductData.productArr
);

export { orderInfoComponent, userInfoComponent, paymentInfoComponent };
