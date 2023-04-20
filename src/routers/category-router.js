import { Router } from 'express';
import { Category } from '../db/models/category-model.js';

const categoryRouter = Router();

//카테고리 전체 조회
categoryRouter.get('/categories', async(req, res, next) => {
    try{
        const categories = await Category.find({});
        res.status(200).json(categories);
    }catch(err) {
        next(err);
    }
});

//카테고리 상세 목록 조회(카테고리 클릭 시 상품들 리스트)
categoryRouter.get('/categories/:categoryId', async(req, res, next) => {
    try{
        const categoryId = req.params.categoryId;
        const categoryProduct = await Category.findById({categoryId});

        res.status(200).json(categoryProduct);
    }catch(err){
        next(err);
    }
})


// 관리자 기능 추가

// ========

export default categoryRouter;
