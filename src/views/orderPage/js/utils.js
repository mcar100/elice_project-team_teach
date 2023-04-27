// 숫자를 돈 환산단위로 바꾸는 코드
const toCurrency = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default toCurrency;
