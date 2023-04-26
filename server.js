import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

// add by jiseong
import { productModel } from './src/db/models/product-model.js';
import * as local from './src/views/webStorage/js/localStorage.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/techmate').then(() => {
  console.log('mongo db connected!');
});

app.listen(port, () => {
  console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${port}`);
});

// add by jiseong
const lg = {
  productName: 'LG전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
  pricePerMonth: [24, 32, 64],
  discountRate: 20,
  images: ['/Users/jisung/techmate/src/views/cartPage/images/lg.jpg'],
  rentalPeriod: 64,
  color: ['white', 'black', 'silver'],
  quantity: 1,
  deliveryFee: 2000,
  productSpecification: {
    model: 'LG전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
    brand: 'LG전자',
    size: 'W 913mm x H 1790mm x D 913mm',
    energyEfficiencyRating: '1등급',
  },
};
const samsung = {
  productName: '삼성전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
  pricePerMonth: [24, 32, 64],
  discountRate: 20,
  images: ['/Users/jisung/techmate/src/views/cartPage/images/samsung.jpg'],
  rentalPeriod: 64,
  color: ['white', 'black', 'silver'],
  quantity: 1,
  deliveryFee: 2000,
  productSpecification: {
    model: '삼성전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
    brand: '삼성전자',
    size: 'W 913mm x H 1790mm x D 913mm',
    energyEfficiencyRating: '1등급',
  },
};
const winnia = {
  productName: 'WINNIA 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
  pricePerMonth: [24, 32, 64],
  discountRate: 20,
  images: ['/Users/jisung/techmate/src/views/cartPage/images/winnia.jpg'],
  rentalPeriod: 64,
  color: ['white', 'black', 'silver'],
  quantity: 1,
  deliveryFee: 2000,
  productSpecification: {
    model: 'WINNIA 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
    brand: 'WINNIA',
    size: 'W 913mm x H 1790mm x D 913mm',
    energyEfficiencyRating: '1등급',
  },
};

// const array = [lg, samsung, winnia];

// for (let index = 0; index < 10; index++) {
//   array.forEach((product) => {
//     productModel.createProduct(product);
//   });
// }
// const products = await productModel.findAll();
// products.forEach((product) => {
//   // console.log(product.id);
//   if (window !== undefined) {
//     local.setProduct(product.id, product.id);
//   }
// });

// productModel.deleteProductInfo('64481185287a4bbe52b76e78');
