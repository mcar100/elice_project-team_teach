import addMainContents from './replaceProductComponent.js';
import * as setSession from './setSessionStorage.js';
import * as local from '../../webStorage/js/localStorage.js';

const render = async () => {
  await addMainContents();
  setSession.setSessionOne();
  setSession.setSessionChecked();

  /**
   */
  const response = await fetch(`http://localhost:3000/products/`);
  const data = await response.json();
  // console.log(data[0]._id);
  data.forEach((product) => {
    const productObject = {
      _id: product._id,
      productName: product.productName,
      discountRate: product.discountRate,
      pricePerMonth: product.pricePerMonth[0],
      images: product.images,
      color: product.color[2],
      brand: product.productSpecification.brand,
      model: product.productSpecification.model,
      size: product.productSpecification.size,
      energyEfficiencyRating:
        product.productSpecification.energyEfficiencyRating,
      deliveryFee: product.deliveryFee,
      rentalPeriod: product.rentalPeriod[1],
    };
    local.setProduct(product._id, JSON.stringify(productObject));
  });
  //  안되는 코드
  // 클라이언트에서 서버 코드를 쓰니까 안 됨. fetch 써야됨.
  // const products = await productModel.findAll();
  // products.forEach((product) => {
  //   console.log(product.id);
  // });
};

render();
