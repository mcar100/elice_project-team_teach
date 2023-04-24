import { Router } from 'express';
import { productService } from '../services/product-service.js';

const productRouter = Router();

//특정 상품 상세 정보 확인
productRouter.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const productInfo = await productService.getProductDetailData(productId);

    res.status(200).json(productInfo);
  } catch (err) {
    next(err);
  }
});

// 저장된 모든 상품 정보 확인
productRouter.get('/', async (req, res, next) => {
  const products = await productService.getAllProductName();

  res.status(200).json(products);
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
