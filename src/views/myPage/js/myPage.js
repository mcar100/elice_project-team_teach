import { header } from '../../headerComponent/header.js';
import { getUserId } from './myData.js';

async function render() {
  header();
  getUserId();
}

render();
