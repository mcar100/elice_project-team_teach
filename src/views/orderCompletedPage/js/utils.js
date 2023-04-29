const toCurrency = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getTodayDate = () => {
  const date = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;

  return date;
};

export { toCurrency, getTodayDate };
