import { header } from '../../headerComponent/header.js';
import { getProduct } from './product.js';
import { moveToOtherByHeader } from '../../EventComponent/moveEventCommon.js';
import { getUrlParams } from './getUrlParams.js';
import { selectBoxEvent } from './selectBox.js';
import { sendItemDetail } from './selectItem.js';

async function renderPage() {
  await header();
  moveToOtherByHeader();
}
renderPage()
  .then(async () => {
    const categoryId = getUrlParams('categoryId');
    await getProduct(categoryId);
    selectBoxEvent();
    sendItemDetail();
  })
  .catch((err) => {
    console.log(err);
  });
