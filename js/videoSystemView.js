"use strict";

class videoSystemView {
  constructor() {
    // this.main = $('main');
    // this.linkShoppingcart = $('#shoppingcart');
    // this.categories = $('#categories');
    this.main = $("main");
    this.categories = $("#categories");
    this.mainCategories = $("#main--categories");
    this.mainContent = $("#main--content");
  }
  init(iteratorCategories) {
    $(this.main).empty();
    let content = "";
    for (const category of iteratorCategories) {
      console.log(category);
      content += `<div class="col-6">
		 	<h1 data-category='${category.name}'"> ${category.name}</h1>
		 </div>`;
    }
    this.main.append(`<div class='row'>${content}</div>`);
  }

  bindInit(handler) {
    $('#home').click((event) => {
      handler();
    });
    // $('#logo').click((event) => {
    // handler();
    // });
  }

  showCategoriesInNav(categories) {
    $(this.categories).empty();
    for (const category of categories) {
      $(this.categories).append(`<a class='dropdown-item' href="#${category.name}" data-category="${category.name}">${category.name}</a>`);
    }
  }
  showCategoriesType(categories) {
    $(this.mainCategories).empty();
    this.mainContent.empty();
    for (const category of categories) {
      $(this.mainCategories).append(`
      <div class="col-lg-3 col-md-6">
        <a href="#${category.name}" data-category="${category.name}">
          ${category.name}
        </a>
      </div>`);
    }
  }
  showProductions(productions, categoryName) {
    this.mainContent.empty();
    // let container = $(`<div class="container row">`)
    this.mainContent.append(`<h1 class="center">${categoryName}</h1>`);
    for (const production of productions) {
      this.mainContent.append(`
      <div class="col-4">
        <img class="Img--Production" src="${production.image}">
        <h3 class="center">${production.name}</h3>
      </div>
      `);
    }
  }

  bindProductionsCategoryList(handler) {
    $(this.mainCategories).find('a').click(function (event) {
      handler(this.dataset.category);
    });
  }
  bindProductionsCategoryListInMenu(handler) {
    $(this.categories).children().click(function (event) {
      handler(this.dataset.category);
    });
  }

}

export default videoSystemView;