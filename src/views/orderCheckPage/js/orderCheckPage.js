import { header } from '../../headerComponent/header.js';
import { cancelOrderByButton } from './cancelOrderByButton.js';
import { addOrderCheck } from './orderCheckComponent.js';

async function render() {
  await header();
  await addOrderCheck();
  await cancelOrderByButton();
}
render();