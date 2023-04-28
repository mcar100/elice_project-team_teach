import { header } from '../../headerComponent/header.js';
import { checkPassword } from './checkPassword.js';

async function render() {
  header();
  checkPassword();
}

render();
