const replaceUserComponent = (usersData, userComponent) => {
  let usersHtmlForRender = '';
  if (!usersData) return -1;
  usersData.forEach((user) => {
    usersHtmlForRender += userComponent
      .replace(/{%USER_ID%}/g, user._id)
      .replace(/{%RECIPIENT%}/g, user.username)
      .replace(/{%ADDRESS%}/g, user.address)
      .replace(/{%PHONE_NUMBER%}/g, user.mobileNumber);
  });
  return usersHtmlForRender;
};

// 아마 객체 참조 부분 구조 바뀔 예정
export default replaceUserComponent;
