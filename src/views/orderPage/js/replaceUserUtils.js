const replaceUserComponent = (usersData, userComponent) => {
  let usersHtmlForRender = '';
  usersData.forEach((user) => {
    usersHtmlForRender += userComponent
      .replace(/{%USER_ID%}/g, user._id)
      .replace(/{%RECIPIENT%}/g, user.username)
      .replace(/{%ADDRESS%}/g, user.address)
      .replace(/{%PHONE_NUMBER%}/g, user.mobileNumber)
      .replace(/{%ZIP_CODE%}/g, 9191282);
  });
  return usersHtmlForRender;
};

// 아마 객체 참조 부분 구조 바뀔 예정
export default replaceUserComponent;
