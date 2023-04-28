const profileContainer = document.querySelector('.profile-container-body');

const getResponsePage = async (user) => {
  profileContainer.innerHTML = `        
  <div>
    <span>내 프로필</span>
  </div>
  <div class="profile-input-info">
    <span>이름</span>
    <span>이메일</span>
    <span>전화번호</span>
    <span>주소</span>
    <span>비밀번호</span>
    <span>비밀번호 확인</span>
  </div>
  <div class="profile-input-container">
    <input class="input-name" type="text" placeholder="이름" value="${user.username}" disabled/>
    <input class="input-email" type="email" placeholder="이메일" value="${user.email}" disabled/>
    <input
      class="input-phonenumber"
      type="text"
      placeholder="전화번호"
      value="${user.mobileNumber}"
    />
    <input class="input-address" type="text" placeholder="주소" value="${user.address}" />
    <input
      class="input-password"
      type="password"
      placeholder="비밀번호"
    />
    <input
      class="input-passwordConfirm"
      type="password"
      placeholder="비밀번호 확인"
    />
  </div>
  <div class="profile-button-container">
  <button class="change-btn change-user-info">변경</button>
  </div>
  <div>
    <button class="button is-danger is-small">회원탈퇴</button>
  </div>`;
};

export { getResponsePage };
