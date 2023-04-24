import { Router } from 'express';
import { categoryService } from '../services/category-services.js';

const categoryRouter = Router();

//카테고리 전체 조회
categoryRouter.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategoryName();
    console.log(categories);
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

//카테고리 상세 목록 조회(카테고리 클릭 시 상품들 리스트)
categoryRouter.get('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryProduct = await categoryService.getProductListByCategoryId(
      categoryId
    );

    res.status(200).json(categoryProduct);
  } catch (err) {
    next(err);
  }
});

// 관리자 기능 추가

//카테고리 추가
categoryRouter.post('/', async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }

    const { categoryName, categoryIcon } = req.body;

    console.log(categoryName, categoryIcon);

    const newCategory = await categoryService.addCategory({
      categoryName,
      categoryIcon,
    });

    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
});

//카테고리 수정
categoryRouter.put('/:categoryId', async (req, res, next) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }

    const categoryId = req.params.categoryId;
    const { categoryName, categoryIcon } = req.body;

    const updateCategory = await categoryService.updateCategoryByCategoryId(
      categoryId,
      { categoryName, categoryIcon }
    );

    res.status(201).json(updateCategory);
  } catch (err) {
    next(err);
  }
});

//카테고리 삭제
categoryRouter.delete('/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const deleteCategory = await categoryService.deleteCategoryByCategoryId(
      categoryId
    );

    res.status(200).json(deleteCategory);
  } catch (err) {
    next(err);
  }
});
// ========

export { categoryRouter };
