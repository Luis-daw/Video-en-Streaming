"use strict";

class videoSystemView {
  constructor() {
    // this.main = $('main');
    // this.linkShoppingcart = $('#shoppingcart');
    // this.categories = $('#categories');
    this.main = $("main");
    this.categories = $("#categories");
  }
  init(iteratorCategories) {
    $(this.main).empty();
    let content = "";
    for (const category of iteratorCategories) {
      content += `<div class="col-6">
		 	<h1 data-category='${category.name}'"> ${category.name}</h1>
		 </div>`;
    }
    this.main.append(`<div class='row'>${content}</div>`);
  }

  bindInit(handler){
    $('#init').click((event) => {
    handler();
    });
    $('#logo').click((event) => {
    handler();
    });
   }

   showCategoriesInNav(categoriesIterator){
    $(this.categories).empty();
      for (const category of categoriesIterator) {
        $(this.categories).append(`<li class="dropdown-item"><a href="#${category.name}" data-category="${category.name}">${category.name}</a></li>`);
      }
   }
}

export default videoSystemView;