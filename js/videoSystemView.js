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
    this.otherWindow = null;
    this.windows = [];
    this.counter = 1;
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

  bindInit(handler) {
    $('#home').click((event) => {
      handler();
    });
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
  bindShowProductionInNewWindow(handler) {
    $('#prod').click((event) => {
      this.otherWindow = window.open("anotherIndex.html", `ProductWindow${this.counter++}`,
        "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar = no, location = no");
      this.otherWindow.addEventListener('DOMContentLoaded', () => {
        handler(event.target.dataset.production);
      });      
      this.windows.push(this.otherWindow);
    });
  }
  bindShowDirectorInNewWindow(handler) {
    $('#prod').click((event) => {
      this.otherWindow = window.open("anotherIndex.html", `ProductWindow${this.counter++}`,
        "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar = no, location = no");
      this.otherWindow.addEventListener('DOMContentLoaded', () => {
        handler(event.target.dataset.director);
      });
      this.windows.push(this.otherWindow);
    });
  }
  bindShowActorInNewWindow(handler) {
    $('#prod').click((event) => {
      this.otherWindow = window.open("anotherIndex.html", `ProductWindow${this.counter++}`,
        "width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no, menubar = no, location = no");
      this.otherWindow.addEventListener('DOMContentLoaded', () => {
        handler(event.target.dataset.actor);
      });
      this.windows.push(this.otherWindow);
    });
  }

  productionsCarousel(productions) {
    this.mainCarousel.empty();
    let first = true;
    let content = `
    <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
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
    this.mainCarousel.empty();
    this.mainContent.empty();
    // let container = $(`<div class="container row">`)
    this.mainContent.append(`<h1 class="al-center">${categoryName}</h1>`);
    for (const production of productions) {
      this.mainContent.append(`
      <div class="col-lg-4 col-md-6"><a href="#${production.title}" data-production="${production.title}">
        <img class="Img--Production" src="${production.image}">
        <h3 class="al-center">${production.title}</h3>
      </a></div>
      `);
    }
  }
  showTeam(actors, directors, production) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    this.mainContent.append(`<h1 class="al-center">${production.title}</h1>
    <div class="row">
      <div class="col-md-6">
        <img class="Img--Production" src="${production.image}">
      </div> 
      <div class="col-md-6">
        <div class="row">
          ${production.mostrarContenidoEnPagina()}
        </div>
        <div class="row">
          <button id="prod" class="btn btn-secondary" data-production="${production.title}">Abrir en otra página</button>
        </div>
      </div> 
    </div> 
    `);



    this.mainContent.append(`<h2 class="al-center">Directores</h2>`);
    for (const director of directors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="director" href="#${director.name}" data-director="${director.name}">
        <h3 class="al-center">${director.name}</h3>
      </a>
      </div>
      `);
    }
    this.mainContent.append(`<h2 class="al-center">Actores</h2>`);
    for (const actor of actors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="actor" href="#${actor.name}" data-actor="${actor.name}">
        <h3 class="al-center">${actor.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showActors(actors) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    this.mainContent.append(`<h1 class="al-center">Actores</h1>`);
    for (const actor of actors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="actor" href="#${actor.name}" data-actor="${actor.name}">
        <h3 class="al-center">${actor.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showDirectors(directors) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    this.mainContent.append(`<h1 class="al-center">Directores</h1>`);
    for (const director of directors) {
      this.mainContent.append(`
      <div class="col-4">
      <a class="director" href="#${director.name}" data-director="${director.name}">
        <h3 class="al-center">${director.name}</h3>
      </a>
      </div>
      `);
    }
  }
  showOneDirector(director, productions) {
    this.mainContent.empty();
    this.mainContent.append(`
      <div class="col-12">
        <h3 class="al-center">${director.mostrarContenidoEnPagina()}</h3>
      </div>
      <div class="col-12">
        <button id="prod" class="btn btn-secondary" data-director="${director.name}">Abrir en otra página</button>
      </div>
      `);
    this.mainContent.append(`<h3 class="al-center">Ha dirigido las siguientes producciones</h3>`);
    for (const production of productions) {
      this.mainContent.append(`
      <div class="col-lg-4 col-md-6"><a href="#${production.title}" data-production="${production.title}">
          <img class="Img--Production" src="${production.image}">
          <h3 class="al-center">${production.title}</h3>
        </a></div>
      `);
    }
  }
  showOneActor(actor, productions) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    this.mainContent.append(`
      <div class="col-12">
        <h3 class="al-center">${actor.mostrarContenidoEnPagina()}</h3>
      </div>
      <div class="col-12">
        <button id="prod" class="btn btn-secondary" data-actor="${actor.name}">Abrir en otra página</button>
      </div>
    `);
    this.mainContent.append(`<h3 class="al-center">Ha actuado en las siguientes producciones</h3>`);
    for (const production of productions) {
      this.mainContent.append(`
        <div class="col-lg-4 col-md-6"><a href="#${production.title}" data-production="${production.title}">
          <img class="Img--Production" src="${production.image}">
          <h3 class="al-center">${production.title}</h3>
        </a></div>
      `);
    }
  }
  showProductionInNewWindow(production, message) {
    let content = $(this.otherWindow.document).find('#main--another--content');
    if (production) {
      content.append(`<h1 class="al-center">${production.title}</h1>
    <div class="row">
      <div class="col-md-6">
        <img class="Img--Production" src="${production.image}">
      </div> 
      <div class="col-md-6">
        <div class="row">
          ${production.mostrarContenidoEnPagina()}
        </div>
        <div class="row">
          <button class="btn btn-secondary" data-production="${production.title}">Abrir en otra página</button>
        </div>
      </div> 
    </div> 
    `);
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
  showActorInNewWindow(actor, message) {
    let content = $(this.otherWindow.document).find('#main--another--content');
    if (actor) {
      content.append(`<div class="col-12">
      <h3 class="al-center">${actor.mostrarContenidoEnPagina()}</h3>
    </div>
      <div class="col-12">
        <button id="prod" class="btn btn-secondary" data-actor="${actor.name}">Abrir en otra página</button>
      </div>
    `);
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
  showDirectorInNewWindow(director, message) {
    let content = $(this.otherWindow.document).find('#main--another--content');
    if (director) {
      content.append(`<div class="col-12">
      <h3 class="al-center">${director.mostrarContenidoEnPagina()}</h3>
    </div>
    `);
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
}

export default videoSystemView;