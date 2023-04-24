import { Router } from 'express';
import { productService } from '../services/product-service.js';

const productRouter = Router();

//특정 상품 상세 정보 확인
productRouter.get('/:productId', async (req, res, next) => {
  try {
    const product = {
      productId: '60ff9826591d828bf80577dc',
      seller: 'LG전자',
      brand: 'LG전자',
      productName:
        'LG전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
      pricePerMonth: 100000,
      discountRate: 20,
      productSpecification: {
        model: 'LG전자 디오스 오브제컬렉션 양문형 냉장고 메탈 832L 방문설치',
        size: 'W 913mm x H 1790mm x D 913mm',
        energyEfficiencyRating: '1등급',
      },
      rentalPeriod: 64,
      color: 'white',
      quantity: 100,
      deliveryFee: 2000,
      description: '편하게 볼 수 있으며, 고급스러운 느낌을 줍니다.',
      imageSrc: '../images/lg.jpg',
    };

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// 저장된 모든 상품 정보 확인
productRouter.get('/', async (req, res, next) => {
  const product = {
    brand: '삼성전자',
    productName: '삼성전자 2021년형 32인치 4K UHD HDR10 QLED TV QE32Q60T',
    price: 100000,
    discountRate: 10,
    productSpecification: '32인치 4K UHD HDR10 QLED TV',
    color: 'white',
    quantity: 100,
    rentalPeriod: 1,
    deliveryFee: 0,
    description: '편하게 볼 수 있으며, 고급스러운 느낌을 줍니다.',
    image: 'clothes.jpg',
  };

  res.status(200).json(product);
});
// 관리자 기능 ========

//상품 추가
productRouter.post('/', async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }

    const {
      productName,
      categoryId,
      sellerId,
      pricePerMonth,
      discountRate,
      images,
      rentalPeriod,
      color,
      quantity,
      productDetailImages,
      productSpecification,
    } = req.body;

    const newProduct = await productService.addProduct({
      productName,
      categoryId,
      sellerId,
      pricePerMonth,
      discountRate,
      images,
      rentalPeriod,
      color,
      quantity,
      productDetailImages,
      productSpecification,
    });

    res.json(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

//상품 정보 수정
productRouter.put('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const {
      productName,
      categoryId,
      sellerId,
      pricePerMonth,
      discountRate,
      images,
      rentalPeriod,
      color,
      quantity,
      productDetailImages,
      productSpecification,
    } = req.body;

    const toUpdate = {
      ...(productName && { productName }),
      ...(pricePerMonth && { pricePerMonth }),
      ...(discountRate && { discountRate }),
      ...(images && { images }),
      ...(rentalPeriod && { rentalPeriod }),
      ...(color && { color }),
      ...(quantity && { quantity }),
      ...(productDetailImages && { productDetailImages }),
      ...(productSpecification && { productSpecification }),
    };

    const updateProduct = await productService.updateProductByProductId(
      productId,
      toUpdate
    );

    res.status(200).json(updateProduct);
  } catch (err) {
    next(err);
  }
});

//상품 삭제
productRouter.delete('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const deleteProduct = await productService.deleteProductData(productId);

    res.status(200).json(deleteProduct);
  } catch (err) {
    next(err);
  }
});

export { productRouter };
