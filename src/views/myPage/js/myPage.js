import { header } from '../../headerComponent/header.js';
import { checkPassword } from './checkPassword.js';

async function render() {
  header();
  checkPassword('11111111');
}

render();
