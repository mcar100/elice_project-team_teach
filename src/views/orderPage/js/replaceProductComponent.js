import getDataFromServer from './getProductsInfoFromServer.js';
import productComponent from './productComponent.js';
import replaceComponentData from './replaceProductUtils.js';

const mainTag = document.getElementById('main');

const addProductMainContents = async () => {
  const productsData = await getDataFromServer();

  const productsHtmlForRender = replaceComponentData(
    productsData,
    productComponent
  );
  mainTag.innerHTML = productsHtmlForRender;
  return productsData;
};

export default addProductMainContents;
