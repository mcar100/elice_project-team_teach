const images = [
  '../images/001.jpg',
  '../images/002.jpg',
  '../images/003.jpg',
  '../images/004.jpg',
  '../images/005.jpg',
  '../images/006.jpg',
  '../images/007.jpg',
];
const wideBillboardColor = [
  '#586471',
  '#BDCAF7',
  '#00275E',
  '#DCDBE0',
  '#C8C2FA',
  '#CFEB9D',
  '#43A99C',
];

const mainBillboard = document.querySelector('.main-billboard');
const mainWideBillboard = document.querySelector('.main-wide-billboard');
const mainNarrowBillboard = document.querySelector('.main-narrow-billboard > img');
let imagesIdx = 1;

/**
 * 1. 맨 뒤에 배경색이 바뀌고
 * 2. 이미지가 바뀌고
 * 3. 옆에 배경색이 바뀌어야 된다.
 * 4. 이미지 배경은 단일색으로 되어야 좋다. 11번가 처럼 전부 똑같은 배경색에 사람 or 상품만 다른 색으로 가져가야 자연스럽게 바뀐다!! 정말 중요!!
 */
const changeBannerImages = async () => {
  mainBillboard.style.backgroundColor = wideBillboardColor[imagesIdx];
  mainNarrowBillboard.style.opacity = 0;
  mainWideBillboard.style.backgroundColor = wideBillboardColor[imagesIdx];

  setTimeout(() => {
    mainNarrowBillboard.style.opacity = 1;
    mainWideBillboard.style.backgroundColor = wideBillboardColor[imagesIdx];
    mainNarrowBillboard.setAttribute('src', images[imagesIdx]);
    imagesIdx++;
    if (imagesIdx === images.length) imagesIdx = 0;
  }, 300);
};

setInterval(changeBannerImages, 5000);
