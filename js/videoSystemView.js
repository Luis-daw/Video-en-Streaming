"use strict";

class videoSystemView {
  constructor() {
    // this.main = $('main');
    // this.linkShoppingcart = $('#shoppingcart');
    // this.categories = $('#categories');
    this.main = $("main");
    this.categories = $("#categories");
    this.mainCarousel = $("#main--carousel");
    this.mainContent = $("#main--content");
    this.navContent = $("#navContent");
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

  productionsCarousel(productions) {
    this.mainCarousel.empty();
    let first = true;
    let content = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">`;

    productions.forEach(production => {
      if (first) {
        content += `
          <div class="carousel-item active">
          <a href="#${production.title}" data-production="${production.title}">
          <img src="${production.image}" class="d-block w-75" alt="...">
          </a>
          </div>
          `
      }
      else {
        content += `
          <div class="carousel-item">
          <a href="#${production.title}" data-production="${production.title}">
          <img src="${production.image}" class="d-block w-100" alt="...">
          </a>
          </div>
          `
      }

      first = false;
    });
    // <div class="carousel-item active">
    //   <img src="..." class="d-block w-100" alt="...">
    // </div>
    // <div class="carousel-item">
    //   <img src="..." class="d-block w-100" alt="...">
    // </div>
    // <div class="carousel-item">
    //   <img src="..." class="d-block w-100" alt="...">
    // </div>

    content += `
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
    this.mainCarousel.append(content);
  }
  showCategoriesInNav(categories) {
    $(this.categories).empty();
    for (const category of categories) {
      $(this.categories).append(`<a class='dropdown-item' href="#${category.name}" data-category="${category.name}">${category.name}</a>`);
    }
  }
  showActorsAndDirectors() {
    $(this.navContent).append(`
    <li class="nav-item">
      <a class="nav-link" id="actors" href="#actors">Actores</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="directors" href="#directors">Directores</a>
    </li>
    `);

    //$(this.actors).append(`<a class='dropdown-item' href="#${category.name}" data-category="${category.name}">${category.name}</a>`);

  }
  showCategoriesType(categories) {
    //$(this.mainCategories).empty();
    this.mainContent.empty();
    for (const category of categories) {
      $(this.mainContent).append(`
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
      <div class="col-4"><a href="#${production.title}" data-production="${production.title}">
        <img class="Img--Production" src="${production.image}">
        <h3 class="center">${production.title}</h3>
      </a></div>
      `);
    }
  }

  bindProductionsCategoryList(handler) {
    $(this.mainContent).find('a').click(function (event) {
      handler(this.dataset.category);
    });
  }
  bindProductionsCategoryListInMenu(handler) {
    $(this.categories).children().click(function (event) {
      handler(this.dataset.category);
    });
  }
  bindCastProductionList(handler) {
    $(this.mainContent).find("a").click(function (event) {
      handler(this.dataset.production);
    });
    this.mainCarousel.find("a").click(function (event) {
      handler(this.dataset.production);
    });
  }
  bindActorsListInMenu(handler) {
    $("#actors").click(function (event) {
      handler();
    });
  }
  bindDirectorsListInMenu(handler) {
    $("#directors").click(function (event) {
      handler();
    });
  }
  bindActor(handler) {
    $(".actor").click(function (event) {
      handler(this.dataset.actor);
    });
  }
  bindDirector(handler) {
    $(".director").click(function (event) {
      handler(this.dataset.director);
    });
  }
  showTeam(actors, directors, title) {
    this.mainContent.empty();
    this.mainContent.append(`<h1 class="center">${title}</h1>`);
    for (const director of directors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="director" href="#${director.name}" data-director="${director.name}">
        <h3 class="center">${director.name}</h3>
      </a>
      </div>
      `);
    }
    for (const actor of actors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="actor" href="#${actor.name}" data-actor="${actor.name}">
        <h3 class="center">${actor.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showActors(actors) {
    this.mainContent.empty();
    this.mainContent.append(`<h1 class="center">Actores</h1>`);
    for (const actor of actors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="actor" href="#${actor.name}" data-actor="${actor.name}">
        <h3 class="center">${actor.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showDirectors(directors) {
    this.mainContent.empty()
    this.mainContent.append(`<h1 class="center">Directores</h1>`);
    for (const director of directors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="director" href="#${director.name}" data-director="${director.name}">
        <h3 class="center">${director.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showOneDirector(director) {
    this.mainContent.empty();
    this.mainContent.append(`
      <div class="col-4">
        <h3 class="center">${director.toString()}</h3>
      </div>
      `);

  }
  showOneActor(actor) {
    this.mainContent.empty();
    this.mainContent.append(`
      <div class="col-4">
        <h3 class="center">${actor.toString()}</h3>
      </div>
    `);
  }

}

export default videoSystemView;