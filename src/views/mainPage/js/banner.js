const images = [
  '/mainPage/images/001.jpg',
  '/mainPage/images/002.jpg',
  '/mainPage/images/003.jpg',
  '/mainPage/images/004.jpg',
  '/mainPage/images/005.jpg',
  '/mainPage/images/006.jpg',
  '/mainPage/images/007.jpg',
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
const mainNarrowBillboard = document.querySelector('.main-narrow-image');
let imageIndex = 1;

const changeBannerImages = () => {
  mainBillboard.style.backgroundColor = wideBillboardColor[imageIndex];
  mainNarrowBillboard.style.opacity = 0;
  mainWideBillboard.style.backgroundColor = wideBillboardColor[imageIndex];

  setTimeout(() => {
    mainNarrowBillboard.style.opacity = 1;
    mainWideBillboard.style.backgroundColor = wideBillboardColor[imageIndex];
    mainNarrowBillboard.setAttribute('src', images[imageIndex]);
    imageIndex = (imageIndex + 1) % images.length;
  }, 300);
};

setInterval(changeBannerImages, 5000);
