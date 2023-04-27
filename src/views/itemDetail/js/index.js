import { header } from '../../headerComponent/header.js';
import { footer } from '../../footerComponent/footer.js';
import { setProductToLocalStorage } from './setLocalStorage.js';
import { setProductToSessionStorage } from './setSessionStorage.js';
import { moveToOtherByHeader } from '../../EventComponent/moveEventCommon.js';

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
const itemTableItemColor = document.getElementById('item-table-item-color');
const itemTableItemSize = document.getElementById('item-table-item-size');
const itemTableItemEnergy = document.getElementById('item-table-item-energy');
const itemDeliveryDay = document.getElementById('item-delivery-day');
const addCartButton = document.getElementById('add-bucket');
const currentBuyButton = document.getElementById('current-buy');
let price;
let localBucketData;

async function renderHeader() {
  await header();
  await moveToOtherByHeader();
}
renderHeader();
footer();

function initSetting(itemData) {
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
    let initColor = itemData.color[i];
    let engColor;

    if (initColor === '블랙') {
      selectedColor.innerHTML = '블랙';
      engColor = 'black';
    } else if (initColor === '화이트') {
      selectedColor.innerHTML = '화이트';
      engColor = 'white';
    } else if (initColor === '실버') {
      selectedColor.innerHTML = '실버';
      engColor = 'silver';
    }

    let colorSelectedButton = document.createElement('button');
    colorSelectedButton.setAttribute('id', 'item-color-selected');
    colorSelectedButton.style.backgroundColor = engColor;
    colorSelectedButton.addEventListener('click', () => {
      let color = colorSelectedButton.style.backgroundColor;
      if (color === 'white') {
        selectedColor.innerHTML = '화이트';
      } else if (color === 'black') {
        selectedColor.innerHTML = '블랙';
      } else if (color === 'silver') {
        selectedColor.innerHTML = '실버';
      }
    });

    itemColorDiv.after(colorSelectedButton);
  }

  price = itemData.pricePerMonth[0];

  rental36month.addEventListener('click', () => {
    itemMonthRentalfee.innerHTML = `${itemData.pricePerMonth[0]}원`;
    price = itemData.pricePerMonth[0];
    rental36month.classList.toggle('rental-option-selected');
    rental48month.classList.remove('rental-option-selected');
    rental60month.classList.remove('rental-option-selected');
  });

  rental48month.addEventListener('click', () => {
    itemMonthRentalfee.innerHTML = `${itemData.pricePerMonth[1]}원`;
    price = itemData.pricePerMonth[1];
    rental36month.classList.remove('rental-option-selected');
    rental48month.classList.toggle('rental-option-selected');
    rental60month.classList.remove('rental-option-selected');
  });

  rental60month.addEventListener('click', () => {
    itemMonthRentalfee.innerHTML = `${itemData.pricePerMonth[2]}원`;
    price = itemData.pricePerMonth[2];
    rental36month.classList.remove('rental-option-selected');
    rental48month.classList.remove('rental-option-selected');
    rental60month.classList.toggle('rental-option-selected');
  });

  itemBrand.innerHTML = itemData.productSpecification.brand;
  itemName.innerHTML = itemData.productName;
  itemMonthRentalfee.innerHTML = ` ${itemData.pricePerMonth[0]}원`;

  if (itemData.deliveryfee === 0) {
    itemIsFree.innerHTML = '무료배송';
  } else {
    itemIsFree.innerHTML = `배송비 : ${String(
      itemData.deliveryFee
    ).toLocaleString('ko-KR')}원`;
  }

  let now = new Date();
  let deliveryDay = new Date(now.setDate(now.getDate() + 2));
  console.log(deliveryDay);

  itemDeliveryDay.innerHTML = dateFormatDay(deliveryDay);

  itemSpecName.innerHTML = itemData.productName;
  itemSpecModel.innerHTML = itemData.productSpecification.model;
  itemSpecBrand.innerHTML = itemData.productSpecification.brand;
  itemSpecEnergy.innerHTML =
    itemData.productSpecification.energyEfficiencyRating;
  itemTableItemName.innerHTML = itemData.productName;
  itemTableItemModel.innerHTML = itemData.productSpecification.model;
  itemTableItemBrand.innerHTML = itemData.productSpecification.brand;

  itemTableItemColor.innerHTML = itemData.color;
  itemTableItemSize.innerHTML = itemData.productSpecification.size;
  itemTableItemEnergy.innerHTML =
    itemData.productSpecification.energyEfficiencyRating;

  addCartButton.addEventListener('click', () => {
    let rentalPeriod;
    if (rental36month.classList.contains('rental-option-selected')) {
      rentalPeriod = 36;
    } else if (rental48month.classList.contains('rental-option-selected')) {
      rentalPeriod = 48;
    } else if (rental60month.classList.contains('rental-option-selected')) {
      rentalPeriod = 60;
    } else {
      alert('상품 렌탈기간을 선택해주세요');
      return;
    }

    localBucketData = {
      _id: itemData._id,
      model: itemData.productSpecification.model,
      brand: itemData.productSpecification.brand,
      energyEfficiencyRating:
        itemData.productSpecification.energyEfficiencyRating,
      rentalPeriod: rentalPeriod,
      pricePerMonth: price,
      deliveryFee: 3000,
      images: itemData.images,
      size: itemData.productSpecification.size,
      productName: itemData.productName,
      color: itemData.color,
      discountRate: itemData.discountRate,
    };

    setProductToLocalStorage(localBucketData);
  });

  currentBuyButton.addEventListener('click', (e) => {
    e.preventDefault();

    let rentalPeriod;
    if (rental36month.classList.contains('rental-option-selected')) {
      rentalPeriod = 36;
    } else if (rental48month.classList.contains('rental-option-selected')) {
      rentalPeriod = 48;
    } else if (rental60month.classList.contains('rental-option-selected')) {
      rentalPeriod = 60;
    } else {
      alert('상품 렌탈기간을 선택해주세요');
      return;
    }

    localBucketData = {
      _id: itemData._id,
      model: itemData.productSpecification.model,
      brand: itemData.productSpecification.brand,
      energyEfficiencyRating:
        itemData.productSpecification.energyEfficiencyRating,
      rentalPeriod: rentalPeriod,
      pricePerMonth: price,
      deliveryFee: 3000,
      images: itemData.images,
      size: itemData.productSpecification.size,
      productName: itemData.productName,
      color: itemData.color,
      discountRate: itemData.discountRate,
    };

    setProductToSessionStorage(localBucketData);
  });
}

upButton.addEventListener('click', () => {
  itemNumber.value = Number(itemNumber.value) + 1;
});

downButton.addEventListener('click', () => {
  const number = Number(itemNumber.value);

  if (number <= 1) {
    return;
  }

  itemNumber.value = Number(itemNumber.value) - 1;
});

function dateFormatDay(date) {
  return date.getMonth() + 1 + '/' + date.getDate();
}

export { initSetting };
