const imgRoute = '../../commonImage/product';
const productArray = [
  {
    produtNumber: 'tv01',
    productName: '[LG] 스탠바이미 TV 27인치 (빠른배송) 렌탈',
    pricePerMonth: ['41,900(23,900)', '32,900(14,900)', '27,900(9,900)'],
    category: 'TV',
    color: '화이트',
    productSpecification: {
      model: '27ART10AKPL',
      brand: 'LG',
      size: '27인치',
      energyEfficiencyRating: '미적용',
    },
    images: [
      `${imgRoute}/tv01.wepb`,
      `${imgRoute}/tv01_1.wepb`,
      `${imgRoute}/tv01_2.wepb`,
      `${imgRoute}/tv01_3.wepb`,
    ],
  },
  {
    produtNumber: 'tv01',
    productName: '[LG] 스탠바이미 TV 27인치 (빠른배송) 렌탈',
    pricePerMonth: ['41,900(23,900)', '32,900(14,900)', '27,900(9,900)'],
    category: 'TV',
    color: '화이트',
    productSpecification: {
      model: '27ART10AKPL',
      brand: 'LG',
      size: '27인치',
      energyEfficiencyRating: '미적용',
    },
    images: [
      `${imgRoute}/tv01.webp`,
      `${imgRoute}/tv01_1.webp`,
      `${imgRoute}/tv01_2.webp`,
      `${imgRoute}/tv01_3.webp`,
    ],
  },
  {
    productNumber: 'tv02',
    productName: '[LG] LED TV 32인치 렌탈',
    pricePerMonth: ['18,900(900)', '14,900(0)', '12,900(0)'],
    color: '블랙',
    productSpecification: {
      model: '32LM581CBND',
      brand: 'LG',
      size: '32인치',
      energyEfficiencyRating: '1등급',
    },
    images: [
      `${imgRoute}/tv02.png`,
      `${imgRoute}/tv02_1.png`,
      `${imgRoute}/tv02_2.png`,
      `${imgRoute}/tv02_3.png`,
    ],
  },
  {
    produtNumber: 'tv01',
    productName: '[LG] 스탠바이미 TV 27인치 (빠른배송) 렌탈',
    pricePerMonth: ['41,900(23,900)', '32,900(14,900)', '27,900(9,900)'],
    category: 'TV',
    color: '화이트',
    productSpecification: {
      model: '27ART10AKPL',
      brand: 'LG',
      size: '27인치',
      energyEfficiencyRating: '미적용',
    },
    images: [
      `${imgRoute}/tv01.webp`,
      `${imgRoute}/tv01_1.webp`,
      `${imgRoute}/tv01_2.webp`,
      `${imgRoute}/tv01_3.webp`,
    ],
  },
  {
    produtNumber: 'tv01',
    productName: '[LG] 스탠바이미 TV 27인치 (빠른배송) 렌탈',
    pricePerMonth: ['41,900(23,900)', '32,900(14,900)', '27,900(9,900)'],
    category: 'TV',
    color: '화이트',
    productSpecification: {
      model: '27ART10AKPL',
      brand: 'LG',
      size: '27인치',
      energyEfficiencyRating: '미적용',
    },
    images: [
      `${imgRoute}/tv01.webp`,
      `${imgRoute}/tv01_1.webp`,
      `${imgRoute}/tv01_2.webp`,
      `${imgRoute}/tv01_3.webp`,
    ],
  },
  {
    productNumber: 'tv03',
    productName: '[삼성] QLED 4K 스마트 TV 55인치 렌탈',
    pricePerMonth: ['34,900(16,900)', '27,900(9,900)', '24,900(6,900)'],
    color: '블랙',
    productSpecification: {
      model: 'KQ55QB60AFXKR',
      brand: '삼성',
      size: '55인치',
      energyEfficiencyRating: '1등급',
    },
    images: [
      `${imgRoute}/tv03.png`,
      `${imgRoute}/tv03_1.png`,
      `${imgRoute}/tv03_2.png`,
      `${imgRoute}/tv03_3.png`,
    ],
  },
];

function getProduct() {
  return productArray;
}

export { getProduct };
