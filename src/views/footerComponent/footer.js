const footerContainer = document.getElementById('footer-container');
const footer = async () => {
  footerContainer.innerHTML = `
    <div id="footer-title-container">
      <div>
        <p>15팀 소개</p>
      </div>
      <div>
        <p>채용정보</p>
      </div>
      <div>
        <p>이용약관</p>
      </div>
      <div>
        <p>전자금융거래약관</p>
      </div>
      <div>
        <p>개인정보처리방침</p>
      </div>
      <div>
        <p>광고안내</p>
      </div>
    </div>
    <!-- 밑의 2개로 나눠진 부분의 총합 -->
    <div id="site-description" class="sites">
      <!-- 왼쪽 설명 칸 -->
      <div id="footer-main">
        <p style="font-size: 14px">15팀(주)</p>
        <br />
        <p>
          대표직원 : ***, ***, ***, ***, ***, 주소 : 대한민국 엘리스
          Tel:2627-4744
        </p>
        <p>
          사업자등록번호 : 337-37-374854, 통신판매업신고 : 2023-엘리스-2342
          사업자정보확인
        </p>
        <p>
          엘리스 15팀(주)은 통신판매중개자로서 엘리스 15팀의 거래당사자가
          아니며, 입점판매자가 등록한 상품정보 및 거래에 대해 엘리스(주)는
          일체 책임을 지지 않습니다.
        </p>
        <br />
        <p>Copyright © 2018 15팀 Co.,Ltd. All Rights Reserved.</p>

        <div id="footer-image-container">
          <div class="footer-image">
            <img src="../icon/elice.png" width="116px" alt="엘리스" />
          </div>
        </div>
      </div>
      <!-- 오른쪽 설명칸 -->
      <div id="footer-sub">
        <p style="font-size: 14px">
          고객센터 <span style="color: red">1599-1234</span> (유료)
        </p>
        <br />
        <p>08378) 서울특별시 엘리스 성수동</p>
        <p>Fax : 013-262-1234 / E-mail : customerservice@15st.co.kr</p>
        <br />
        <p style="font-size: 14px">전자금융거래분쟁담당</p>
        <br />
        <p>Tel : 1599-1234 / Fax : 031-441-1234</p>
        <p>E-mail : customerservice@15st.co.kr</p>
      </div>
    </div>`;
};

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export { footer };
