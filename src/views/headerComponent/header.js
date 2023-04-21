import { addCategoryBar } from './categoryList/categoryBar.js';
import { addSearchBar } from './searchBar.js';
import { addButtonBar } from './buttonBar.js';

const header = async function(){
    addCategoryBar();
    addSearchBar();
    addButtonBar();
}

export { header };