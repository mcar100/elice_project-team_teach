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

export default replaceUserComponent;
