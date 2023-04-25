import { getMainCategoryData } from './category.js';
import { header } from '../../headerComponent/header.js';
// import { moveToPage } from './moveToPage.js';
// 헤더가 보이게 임포트

function main() {
  header();
  getMainCategoryData();
}

main();
