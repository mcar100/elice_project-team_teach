const firstCheck = document.querySelector('.address-info-choice-radio.c1');
const secondCheck = document.querySelector('.address-info-choice-radio.c2');

const changeDisplay = (e) => {
  const displayDefault = document.querySelector(
    '.address-info-default-display'
  );
  const displayNone = document.querySelector('.address-info-direct-none');

  if (e.target.id === 'default-display') {
    displayDefault.style.display = 'block';
    displayNone.style.display = 'none';

    displayDefault.checked = true;
    displayNone.checked = false;
  } else if (e.target.id === 'direct-input') {
    displayDefault.style.display = 'none';
    displayNone.style.display = 'flex';

    displayDefault.checked = false;
    displayNone.checked = true;
  }
};

firstCheck.addEventListener('click', changeDisplay);
secondCheck.addEventListener('click', changeDisplay);
