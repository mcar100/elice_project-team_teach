import getDataFromServer from './getProductsInfoFromServer.js';
import productComponent from './productComponent.js';
import replaceComponentData from './replaceProductUtils.js';

const mainTag = document.getElementById('main');

const addProductMainContents = async () => {
  let productsData = await getDataFromServer();
  productsData = Array.from(productsData).filter((product) => product !== -1);

  const productsHtmlForRender = replaceComponentData(
    productsData,
    productComponent
  );
  mainTag.innerHTML = productsHtmlForRender;
  return productsData;
};

export default addProductMainContents;
