import { getDataFromLocalStorage } from './getProductsInfoFromServer.js';
import productComponent from './productComponent.js';
import replaceComponentData from './replaceUtils.js';

const mainTag = document.getElementById('main');

const addMainContents = () => {
  const productsData = getDataFromLocalStorage();

  const productsHtmlForRender = replaceComponentData(
    productsData,
    productComponent
  );
  mainTag.innerHTML = productsHtmlForRender;
};

export default addMainContents;
