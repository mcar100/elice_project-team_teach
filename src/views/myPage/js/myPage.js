import { header } from '../../headerComponent/header.js';
import { checkPassword } from './checkPassword.js';
import { moveToMyOrderCheck } from '../../EventComponent/moveEventCommon.js';

async function render() {
  header();
  checkPassword();
   moveToMyOrderCheck();
}

render();
