const searchContainer = document.getElementById('search-container');

function addSearchBar() {
  searchContainer.innerHTML = `
    <input class="input" type="text" placeholder="상품을 검색하세요" />
    <div class="search-btn">
      <svg width="26px" height="26px" viewBox="0 0 24 24" class="search-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5776 14.5419C15.5805 13.53 16.2 12.1373 16.2 10.6C16.2 7.50721 13.6928 5 10.6 5C7.50721 5 5 7.50721 5 10.6C5 13.6928 7.50721 16.2 10.6 16.2C12.1555 16.2 13.5628 15.5658 14.5776 14.5419ZM14.5776 14.5419L19 19" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    `;
}

export { addSearchBar };
