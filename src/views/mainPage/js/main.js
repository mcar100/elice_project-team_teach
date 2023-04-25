import { addEvents } from './eventManager.js';
import { getMainCategoryData } from './category.js';
import { header } from '../../headerComponent/header.js';

// 헤더가 보이게 임포트

function main() {
  addEvents();
  getMainCategoryData();
  header();
}

main();
