const searchContainer = document.getElementById('search-container');

function addSearchBar() {
  searchContainer.innerHTML = `
    <input class="input" type="text" placeholder="상품을 검색하세요" />
    <div class="search-btn">
      <img
        src="../../mainPage/icon/free-icon-magnifier-2866321.png"
        alt="search icon"
      />
    </div>
    `;
}

export default { addSearchBar };
