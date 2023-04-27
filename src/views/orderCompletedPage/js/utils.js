// 숫자를 돈 환산단위로 바꾸는 코드
const toCurrency = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getTodayDate = () => {
  const date = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;

  return date;
};

export { toCurrency, getTodayDate };
