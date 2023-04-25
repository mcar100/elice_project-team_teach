const default1 = document.querySelector('.address-info-default-display');
const none = document.querySelector('.address-info-direct-none');

const firstCheck = document.querySelector('.address-info-choice-radio.c1');
const secondCheck = document.querySelector('.address-info-choice-radio.c2');

const changeDisplay = (e) => {
  if (e.target.id === 'default-display') {
    default1.style.display = 'block';
    none.style.display = 'none';

    default1.checked = true;
    none.checked = false;
  } else if (e.target.id === 'direct-input') {
    default1.style.display = 'none';
    none.style.display = 'flex';

    default1.checked = false;
    none.checked = true;
  }
};
// 아하! input의 id랑 label의 for이 같아야 하는구나!
firstCheck.addEventListener('click', changeDisplay);
secondCheck.addEventListener('click', changeDisplay);
