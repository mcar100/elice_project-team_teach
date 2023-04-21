import { Router } from 'express';
import { productModel } from '../db/models/product-model.js';

const productRouter = Router();

productRouter.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const productInfo = await productModel.findById({ productId });

    res.status(200).json(productInfo);
  } catch (err) {
    next(err);
  }
});

// 관리자 기능 ========

//카테고리 추가

//카테고리 수정

//카테고리 삭제

export default productRouter;
