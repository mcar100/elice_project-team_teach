import addProductMainContents from './replaceProductComponent.js';
// import addUserMainContents from './replaceUserComponent.js';

const randomNumber13 = () => {
  const randomNum = Math.floor(Math.random() * 10000000000000);
  return randomNum;
};

const getUserProductData = (userData, productData) => {
  const orderDate = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;
  const orderNumber = randomNumber13();
  const username = '임지성';
  const address = '인천광역시 서구 가정동 123-45 101호';
  const mobileNumber = '010-1234-5678';
  const require = '문 앞에 놔주세요';
  const productArr = [];

  Array.from(productData).forEach((productSessionData) => {
    // console.log(JSON.stringify(productSessionData, null, 2));
    const product = JSON.parse(productSessionData.value);
    const productObj = {
      productId: product.productId,
      pricePerMonth: product.pricePerMonth,
      discountRate: product.discountRate,
      deliveryFee: product.deliveryFee,
    };
    productArr.push(productObj);
  });

  const orderData = {
    orderDate,
    orderNumber,
    username,
    address,
    mobileNumber,
    require,
    productArr,
  };

  return orderData;
};

const renderUserProduct = async () => {
  // const userData = await addUserMainContents();
  const productData = await addProductMainContents();

  return getUserProductData('userData', productData);
};

export default renderUserProduct;
