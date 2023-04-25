import addProductMainContents from './replaceProductComponent.js';
import addUserMainContents from './replaceUserComponent.js';
import totalPriceInfoFunc from './finalInfo.js';

const render = async () => {
  await addUserMainContents();
  await addProductMainContents();
  totalPriceInfoFunc();
};

render();
