import { header } from '../../headerComponent/header.js';
import { getProduct } from './product.js';
import { moveToOtherByHeader } from '../../headerComponent/moveEventCommon.js';

async function renderPage() {
  await header();
  setTimeout(() => {
    moveToOtherByHeader();
  }, 1000);
  setTimeout(() => {
    getProduct();
  }, 1000);
}
renderPage();
