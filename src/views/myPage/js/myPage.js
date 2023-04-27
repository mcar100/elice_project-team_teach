import { header } from '../../headerComponent/header.js';
import { moveToOtherByHeader } from '../../headerComponent/moveEventCommon.js';
/* hello git-lab!!!!!!! */
async function render() {
  header().then(() => {
    moveToOtherByHeader();
  });
}

render();
