const images = [
  '../images/001.png',
  '../images/002.png',
  '../images/003.png',
  '../images/004.png',
  '../images/005.png',
  '../images/006.png',
];
const wideBillboardColor = [
  '#0f1021',
  '#2A2B4E',
  '#CCCCCD',
  '#131318',
  '#747AF2',
  '#34158C',
];

const mainWideBillboard = document.querySelector('.main-wide-billboard');
const mainNarrowBillboard = document.querySelector('.main-narrow-billboard > img');
let imagesIdx = 1;

const changeBannerImages = async () => {
  mainNarrowBillboard.style.opacity = 0.4;

  setTimeout(() => {
    mainNarrowBillboard.setAttribute('src', images[imagesIdx]);
    mainWideBillboard.style.backgroundColor = wideBillboardColor[imagesIdx];
    mainNarrowBillboard.style.opacity = 1;
    imagesIdx++;
    if (imagesIdx === images.length) imagesIdx = 0;
  }, 150);
};

setInterval(changeBannerImages, 5000);
