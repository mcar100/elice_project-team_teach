import { addCategoryBar } from './categoryList/categoryBar.js';
import { addSearchBar } from './searchBar.js';
import { addButtonBar } from './buttonBar.js';
import { manageSign } from './sign.js';
import { moveToOtherByHeader } from '../EventComponent/moveEventCommon.js';

const header = async function () {
  addCategoryBar();
  addSearchBar();
  addButtonBar();
  manageSign();
  moveToOtherByHeader();
};

export { header };
