import { header } from '../../headerComponent/header.js';
import { getProduct } from './product.js';
import { moveToOtherByHeader } from '../../headerComponent/moveEventCommon.js';
import { getUrlParams } from './getUrlParams.js';
import { selectBoxEvent } from './selectBox.js';

async function renderPage() {
  await header();
}
renderPage()
  .then(() => {
    moveToOtherByHeader();
  })
  .then(() => {
    const categoryId = getUrlParams('categoryId');
    getProduct(categoryId);
  })
  .then(() => {
    selectBoxEvent();
  });
