import { header } from "../../headerComponent/header.js";
import { footer } from "../../footerComponent/footer.js";

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
const itemData = {
  images: ['../icon/heart.png', '../icon/elice.png'],
  name: '삼성 T76 냉장고',
  pricePerMonth: 110000,
  discountRate: 10000,
  category: '냉장고',
  color: ['white', 'yellow', 'black'],
  productSpecification: {
    model: 'M-2526',
    brand: '삼성',
    size: '280 * 280',
    energyEfficiencyRating: '2등급',
  },
  monthRentalfee: 150000,
  deliveryfee: 30000,
  seller:"삼성의 판매자",
};

let rentalOption = 0;

header();
footer();

window.onload = () => {
  // 해당코드는 서버로부터 데이터를 전달 받은 직후 실행시킨다.
  initSetting();
};

function initSetting() {
  let mainImage = document.createElement('img');
  mainImage.src = itemData.images[0];
  mainImage.setAttribute('id', 'main-image');
  mainImage.setAttribute('alt', '메인 상품 이미지');

  mainImageDiv.appendChild(mainImage);

  for (let i = 0; i < itemData.images.length; i++) {
    let subImage = document.createElement('img');
    subImage.src = itemData.images[i];
    subImage.setAttribute('alt', '메인 상품 이미지');

    subImage.addEventListener('mouseover', (err) => {
      mainImage.src = subImage.src;
    });

    subImageDiv.appendChild(subImage);
  }

  for (let i = 0; i < itemData.color.length; i++) {
    let initColor = itemData.color[itemData.color.length - 1];
    if (initColor === 'white') {
      selectedColor.innerHTML = '화이트';
    } else if (initColor === 'black') {
      selectedColor.innerHTML = '블랙';
    } else if (initColor === 'red') {
      selectedColor.innerHTML = '레드';
    } else if (initColor === 'yellow') {
      selectedColor.innerHTML = '골드';
    } else {
      selectedColor.innerHTML = color;
    }

    let colorDiv = document.createElement('div');
    let colorSelectedButton = document.createElement('button');
    colorDiv.style.padding = '3px';
    colorDiv.appendChild(colorSelectedButton);
    colorSelectedButton.setAttribute('id', 'item-color-selected');
    colorSelectedButton.style.backgroundColor = itemData.color[i];
    colorSelectedButton.addEventListener('click', (err) => {
      colorDiv.classList.toggle('color-selected');
      console.log(colorDiv.getAttribute('class'));
      let color = colorSelectedButton.style.backgroundColor;
      if (color === 'white') {
        selectedColor.innerHTML = '화이트';
      } else if (color === 'black') {
        selectedColor.innerHTML = '블랙';
      } else if (color === 'red') {
        selectedColor.innerHTML = '레드';
      } else if (color === 'yellow') {
        selectedColor.innerHTML = '골드';
      } else {
        selectedColor.innerHTML = color;
      }
    });  
    itemColorDiv.after(colorSelectedButton);

    

  }

  itemBrand.innerHTML = itemData.productSpecification.brand;
  itemName.innerHTML = itemData.name;
  itemMonthRentalfee.innerHTML = itemData.monthRentalfee;

  if (itemData.deliveryfee === 0) {
    itemIsFree.innerHTML = '무료배송';
  } else {
    itemIsFree.innerHTML = String('배송비 : ')
      .concat(itemData.deliveryfee.toLocaleString('ko-KR'))
      .concat('원');
  }
}


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

const rental36month = document.getElementById('rental36month');
const rental48month = document.getElementById('rental48month');
const rental60month = document.getElementById('rental60month');
const itemSpecName = document.getElementById('item-spec-div-name');
const itemSpecModel = document.getElementById('item-spec-div-model');
const itemSpecBrand = document.getElementById('item-spec-div-brand');
const itemSpecEnergy = document.getElementById('item-spec-div-energy');
const itemTableItemName = document.getElementById('item-table-item-name');
const itemTableItemModel = document.getElementById('item-table-item-model');
const itemTableItemBrand = document.getElementById('item-table-item-brand');
const itemTableItemCategorie = document.getElementById('item-table-item-categorie');
const itemTableItemColor = document.getElementById('item-table-item-color');
const itemTableItemSeller = document.getElementById('item-table-item-seller');
const itemTableItemSize = document.getElementById('item-table-item-size');
const itemTableItemEnergy = document.getElementById('item-table-item-energy');
const itemDeliveryDay = document.getElementById("item-delivery-day");

rental36month.addEventListener("click", (err) =>{
  rental36month.classList.toggle("rental-option-selected");
  rental48month.classList.remove("rental-option-selected");
  rental60month.classList.remove("rental-option-selected");

});

rental48month.addEventListener("click", (err) =>{
  rental36month.classList.remove("rental-option-selected");
  rental48month.classList.toggle("rental-option-selected");
  rental60month.classList.remove("rental-option-selected");

});

rental60month.addEventListener("click", (err) =>{
  rental36month.classList.remove("rental-option-selected");
  rental48month.classList.remove("rental-option-selected");
  rental60month.classList.toggle("rental-option-selected");

});

let now = new Date();
let deliveryDay = new Date(now.setDate(now.getDate() + 2));
console.log(deliveryDay);

itemDeliveryDay.innerHTML = dateFormatDay(deliveryDay) 
itemSpecName.innerHTML = itemData.name;
itemSpecModel.innerHTML = itemData.productSpecification.model;
itemSpecBrand.innerHTML = itemData.productSpecification.brand;
itemSpecEnergy.innerHTML = itemData.productSpecification.energyEfficiencyRating;
itemTableItemName.innerHTML = itemData.name;
itemTableItemModel.innerHTML = itemData.productSpecification.model
itemTableItemBrand.innerHTML = itemData.productSpecification.brand;
itemTableItemCategorie.innerHTML = "카테고리";
itemTableItemColor.innerHTML = "color 여러 색";
itemTableItemSeller.innerHTML = "판매자";
itemTableItemSize.innerHTML = "사이즈";
itemTableItemEnergy.innerHTML = "에너지효율"

function dateFormatDay(date){
  console.log(date);
  return (date.getMonth() + 1) + "/" + date.getDate();

}