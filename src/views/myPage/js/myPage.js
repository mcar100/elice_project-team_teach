import { header } from '../../headerComponent/header.js';
import { moveToOtherByHeader } from '../../headerComponent/moveEventCommon.js';
/* hello git-lab!!!!!!! */
async function render() {
  await header();
  await moveToOtherByHeader();
}

render();
