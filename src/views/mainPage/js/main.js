import { getMainCategoryData } from './category.js';
import { header } from '../../headerComponent/header.js';
import { moveToOtherByHeader } from '../../EventComponent/moveEventCommon.js';
// 헤더가 보이게 임포트

async function main() {
  await getMainCategoryData();
  await header();
}

main();
