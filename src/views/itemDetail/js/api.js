const itemData = {
  images: ['../images/choco.png', '../icon/elice.png'],
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

window.onload = () => {
  // 해당코드는 서버로부터 데이터를 전달 받은 직후 실행시킨다.
  initSetting();
};
