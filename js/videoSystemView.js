"use strict";

class videoSystemView {
  constructor() {
    // this.main = $('main');
    // this.linkShoppingcart = $('#shoppingcart');
    // this.categories = $('#categories');
    this.main = $("main");
    this.nav = document.getElementById("navContent");
    console.log(this.main);
  }
  init(iteratorCategories) {
    $(this.main).empty();
    let content = "";
    for (const category of iteratorCategories) {
      content += `<div class="col-6">
		 	<h1 data-category='${category.name}' onclick="showProductions()"> ${category.name}</h1>
		 </div>`;
    }
    this.main.append(`<div class='row'>${content}</div>`);
  }
}

export default videoSystemView;