import getDataFromServer from './getProductsInfoFromServer.js';
import productComponent from './productComponent.js';
import replaceComponentData from './replaceUtils.js';

const mainTag = document.getElementById('main');

const addMainContents = async () => {
  const productsData = await getDataFromServer();

  const productsHtmlForRender = replaceComponentData(
    productsData,
    productComponent
  );
  mainTag.innerHTML = productsHtmlForRender;
};

export default addMainContents;
