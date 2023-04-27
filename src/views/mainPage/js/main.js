import { getMainCategoryData } from './category.js';
import { header } from '../../headerComponent/header.js';
import { moveToOtherByHeader } from '../../headerComponent/moveEventCommon.js';

// 헤더가 보이게 임포트

async function main() {
  await getMainCategoryData();
  await header();
  await moveToOtherByHeader();
  const { cookie } = document;
  console.log(cookie);
}

main();
