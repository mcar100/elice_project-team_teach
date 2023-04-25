import addMainContents from './replaceProductComponent.js';
import * as setSession from './setSessionStorage.js';
import { productModel } from '../../../db/models/product-model.js';
import * as local from '../../webStorage/js/localStorage.js';

const render = async () => {
  await addMainContents();
  setSession.setSessionOne();
  setSession.setSessionChecked();

  const products = await productModel.findAll();
  products.forEach((product) => {
    console.log(product.id);
    local.setProduct(product.id, product.id);
  });
};

render();
