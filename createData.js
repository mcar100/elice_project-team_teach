import { productModel } from './src/db/models/product-model.js';

const testProduct = {
  productName: 'LG전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
  pricePerMonth: [24, 32, 64],
  discountRate: 20,
  images: ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg'],
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

productModel.createProduct(testProduct);
