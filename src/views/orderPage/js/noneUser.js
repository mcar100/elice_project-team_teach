const noneUser = () => {
  const displayDefault = document.querySelector(
    '.address-info-default-display'
  );

  if (!sessionStorage.getItem('techmate_token')) {
    displayDefault.innerHTML =
      '<p class="none-user-comment">주소를 직접 입력해주세요.<br>제발ㅠㅠ</p>';
  }
};

export default noneUser;
