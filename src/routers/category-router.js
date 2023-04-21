import { Router } from 'express';
import { categoryModel } from '../db/models/category-model.js';

const categoryRouter = Router();

//카테고리 전체 조회
categoryRouter.get('/', async(req, res, next) => {
    try{
        const categories = await categoryModel.findAll();
        console.log(categories);
        res.status(200).json(categories);
    }catch(err) {
        next(err);
    }
});

//카테고리 추가 테스트 - 삭제 예정
categoryRouter.post('/', async(req, res, next) => {
    try{
        const { category, subCategory } = req.body;

        console.log(category, subCategory);

        const categoryData = await categoryModel.create({
            category,
            subCategory,
        });

        res.status(201).json(categoryData);
    }catch(err) {
        next(err);
    }
});


//카테고리 상세 목록 조회(카테고리 클릭 시 상품들 리스트)
categoryRouter.get('/categories/:categoryId', async(req, res, next) => {
    try{
        const categoryId = req.params.categoryId;
        const categoryProduct = await categoryModel.findById(categoryId);

        res.status(200).json(categoryProduct);
    }catch(err){
        next(err);
    }
});


// 관리자 기능 추가

// ========

export default categoryRouter;
