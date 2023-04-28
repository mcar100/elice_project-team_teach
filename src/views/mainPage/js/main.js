import { getMainCategoryData } from './category.js';
import { header } from '../../headerComponent/header.js';

async function main() {
  await getMainCategoryData();
  await header();
}

main();
