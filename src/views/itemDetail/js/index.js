const itemNumber = document.getElementById('item-number');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const mainImageDiv = document.querySelector('.item-main-image-div');
const subImageDiv = document.getElementById('item-sub-images');
const itemBrand = document.getElementById('item-brand');
const whiteColorButton = document.getElementById('item-color-white');
const blackColorButton = document.getElementById('item-color-black');
const selectedColor = document.getElementById('item-selected-color');
const itemColorDiv = document.getElementById('item-color-div');
const itemName = document.getElementById('item-name');
const itemMonthRentalfee = document.getElementById('item-month-rental-fee');
const itemIsFree = document.getElementById('is-free');

upButton.addEventListener('click', (err) => {
  itemNumber.value = Number(itemNumber.value) + 1;
});

downButton.addEventListener('click', (err) => {
  let number = Number(itemNumber.value);

  if (number <= 1) {
    return;
  }

  itemNumber.value = Number(itemNumber.value) - 1;
});
