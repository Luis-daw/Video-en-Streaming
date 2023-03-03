"use strict";

function excecuteHandler(
  handler, handlerArguments, scrollElement, data, url, event) {
  handler(...handlerArguments);
  $(scrollElement).get(0).scrollIntoView();
  history.pushState(data, null, url);
  event.preventDefault();
}
class videoSystemView {
  #excecuteHandler(
    handler, handlerArguments, scrollElement, data, url, event) {
    handler(...handlerArguments);
    $(scrollElement).get(0).scrollIntoView();
    history.pushState(data, null, url);
    event.preventDefault();
  }

  constructor() {
    this.main = $("main");
    this.categories = $("#categories");
    this.mainCarousel = $("#main--carousel");
    this.mainContent = $("#main--content");
    this.navContent = $("#navContent");
    this.otherWindow = null;
    this.windows = [];
    this.counter = 1;
  }

  //Mirar luego

  // init(iteratorCategories) {
  //   $(this.main).empty();
  //   let content = "";
  //   for (const category of iteratorCategories) {
  //     content += `<div class="col-6">
	// 	 	<h1 data-category='${category.name}'"> ${category.name}</h1>
	// 	 </div>`;
  //   }
  //   this.main.append(`<div class='row'>${content}</div>`);
  // }

  // bindInit(handler) {
  //   $('#home').click((event) => {
  //     this.#excecuteHandler(handler, [], "body", { action: "init" }, "#", event);
  //   });
  // }

  // bindProductionsCategoryList(handler) {
  //   $(this.mainContent).find('a').click((event) => {
  //     //let category = $(event.target).closest($('a')).get(0).dataset.category;
  //     this.#excecuteHandler(handler, [this.dataset.category], "body", { action: "productionsCategoryList", category: this.dataset.category }, "#category-list", event);
  //   });
  // }
  // bindProductionsCategoryListInMenu(handler) {
  //   $(this.categories).children().click((event) => {
  //     this.#excecuteHandler(handler, [this.dataset.category], "body", { action: "productionsCategoryList", category: this.dataset.category }, "#category-list", event);
  //   });
  // }
  // bindCastProductionList(handler) {
  //   $(this.mainContent).find("a").click((event) => {
  //     // console.log(this.dataset.production);
  //     this.#excecuteHandler(handler, [this.dataset.production], "body", { action: "showCast", production: this.dataset.production }, "#production", event);
  //   });
  //   this.mainCarousel.find("a").click((event) => {
  //     this.#excecuteHandler(handler, [this.dataset.production], "body", { action: "showCast", production: this.dataset.production }, "#production", event);
  //   });
  // }
  // bindActorsListInMenu(handler) {
  //   $("#actors").click((event) => {
  //     this.#excecuteHandler(handler, [], "body", { action: "showActors" }, "#actors", event);
  //   });
  // }
  // bindDirectorsListInMenu(handler) {
  //   $("#directors").click((event) => {
  //     this.#excecuteHandler(handler, [], "body", { action: "showDirectors" }, "#directors", event);
  //   });
  // }
  // bindActor(handler) {
  //   $(".actor").click((event) => {
  //     this.#excecuteHandler(handler, [this.dataset.actor], "body", { action: "showActor", actor: this.dataset.actor }, "#actor", event);
  //   });
  // }
  // bindDirector(handler) {
  //   $(".director").click((event) => {
  //     this.#excecuteHandler(handler, [this.dataset.director], "body", { action: "showDirector", director: this.dataset.director }, "#director", event);
  //   });
  // }

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
      this.#excecuteHandler(handler, [], "body", { action: "init" }, "#", event);
    });
  }

  bindProductionsCategoryList(handler) {
    $(this.mainContent).find('a').click(function (event) {
      //let category = $(event.target).closest($('a')).get(0).dataset.category;
      excecuteHandler(handler, [this.dataset.category], "body", { action: "productionsCategoryList", category: this.dataset.category }, "#category-list", event);
    });
  }
  bindProductionsCategoryListInMenu(handler) {
    $(this.categories).children().click(function (event) {
      excecuteHandler(handler, [this.dataset.category], "body", { action: "productionsCategoryList", category: this.dataset.category }, "#category-list", event);
    });
  }
  bindCastProductionList(handler) {
    $(this.mainContent).find("a").click(function (event) {
      // console.log(this.dataset.production);
      excecuteHandler(handler, [this.dataset.production], "body", { action: "showCast", production: this.dataset.production }, "#production", event);
    });
    this.mainCarousel.find("a").click(function (event) {
      excecuteHandler(handler, [this.dataset.production], "body", { action: "showCast", production: this.dataset.production }, "#production", event);
    });
  }
  bindActorsListInMenu(handler) {
    $("#actors").click(function (event) {
      excecuteHandler(handler, [], "body", { action: "showActors" }, "#actors", event);
    });
  }
  bindDirectorsListInMenu(handler) {
    $("#directors").click(function (event) {
      excecuteHandler(handler, [], "body", { action: "showDirectors" }, "#directors", event);
    });
  }
  bindActor(handler) {
    $(".actor").click(function (event) {
      excecuteHandler(handler, [this.dataset.actor], "body", { action: "showActor", actor: this.dataset.actor }, "#actor", event);
    });
  }
  bindDirector(handler) {
    $(".director").click(function (event) {
      excecuteHandler(handler, [this.dataset.director], "body", { action: "showDirector", director: this.dataset.director }, "#director", event);
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
  bindCloseAllWindows(handler) {
    $("#close--windows").click((event) => {
      handler(this.windows);
    });
  }
  bindAdminMenu(handlerNewProduction, handlerRemoveProduction, handlerAssignDeassignPerson, handlerAddRemoveCategory, handlerNewPerson, handlerRemovePerson) {
    $('#newProduction').click((event) => {
      this.#excecuteHandler(handlerNewProduction, [], 'body', { action: 'newProduction' }, '#newProduction', event);
    });
    $('#removeProduction').click((event) => {
      this.#excecuteHandler(handlerRemoveProduction, [], 'body', { action: 'removeProduction' }, '#removeProduction', event);
    });
    $('#assignDeassignPerson').click((event) => {
      this.#excecuteHandler(handlerAssignDeassignPerson, [], 'body', { action: 'assignDeassignPerson' }, '#assignDeassignPerson', event);
    });
    $('#addRemoveCategory').click((event) => {
      this.#excecuteHandler(handlerAddRemoveCategory, [], 'body', { action: 'addRemoveCategory' }, '#addRemoveCategory', event);
    });
    $('#newPerson').click((event) => {
      this.#excecuteHandler(handlerNewPerson, [], 'body', { action: 'newPerson' }, '#newPerson', event);
    });
    $('#removePerson').click((event) => {
      this.#excecuteHandler(handlerRemovePerson, [], 'body', { action: 'removePerson' }, '#removePerson', event);
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
  showProductionInNewWindow(production, actors, directors, message) {
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
      </div> 
    </div> 
    `);
      content.append(`<h2 class="al-center">Directores</h2>`);
      for (const director of directors) {
        content.append(`
      <div class="col-4">
      <a class="director" href="#${director.name}" data-director="${director.name}">
        <h3 class="al-center">${director.name}</h3>
      </a>
      </div>
      `);
      }
      content.append(`<h2 class="al-center">Actores</h2>`);
      for (const actor of actors) {
        content.append(`
      <div class="col-4">
      <a class="actor" href="#${actor.name}" data-actor="${actor.name}">
        <h3 class="al-center">${actor.name}</h3>
      </a>
      </div>
      `);
      }
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
  showActorInNewWindow(actor, productions, message) {
    let content = $(this.otherWindow.document).find('#main--another--content');
    if (actor) {
      content.append(`<div class="col-12">
      <h3 class="al-center">${actor.mostrarContenidoEnPagina()}</h3>
    </div>
    `);
      content.append(`<h3 class="al-center">Ha actuado en las siguientes producciones</h3>`);
      for (const production of productions) {
        content.append(`
        <div class="col-lg-4 col-md-6"><a href="#${production.title}" data-production="${production.title}">
          <img class="Img--Production" src="${production.image}">
          <h3 class="al-center">${production.title}</h3>
        </a></div>
      `);
      }
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
  showDirectorInNewWindow(director, productions, message) {
    let content = $(this.otherWindow.document).find('#main--another--content');
    if (director) {
      content.append(`<div class="col-12">
      <h3 class="al-center">${director.mostrarContenidoEnPagina()}</h3>
    </div>
    `);
      content.append(`<h3 class="al-center">Ha dirigido las siguientes producciones</h3>`);
      for (const production of productions) {
        content.append(`
        <div class="col-lg-4 col-md-6"><a href="#${production.title}" data-production="${production.title}">
          <img class="Img--Production" src="${production.image}">
          <h3 class="al-center">${production.title}</h3>
        </a></div>
      `);
      }
    }
    else {
      content.append(`<h1> ${message} </h1>`);
    }
  }
  showWindowsCloseOnMenu() {
    $(this.navContent).append(`
      <a class="nav-link" id="close--windows" href="#">Cerrar ventanas</a>
    `);
  }
  showAdminMenu() {
    let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navAdmin" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Administración
			</a>
      <div class="dropdown-menu" aria-labelledby="navAdmin">
			<a id="newProduction" class="dropdown-item" href="#NewProduction">Crear producción</a>
			<a id="removeProduction" class="dropdown-item" href="#RemoveProduction">Eliminar producción</a>
			<a id="assignDeassignPerson" class="dropdown-item" href="#AssignPerson">Asignar y desasignar personas</a>
			<a id="addRemoveCategory" class="dropdown-item" href="#AddRemoveCategory">Añadir y eliminar categorias</a>
			<a id="newPerson" class="dropdown-item" href="#NewPerson">Nueva persona</a>
			<a id="removePerson" class="dropdown-item" href="#RemovePerson">Eliminar persona</a>
		</div>
    </li>`);
    this.navContent.append(li);
  }
  showNewProductionForm(){
    console.log("TestNewProd");
  }
  showRemoveProductionForm(productions){
    console.log("TestRemove");
  }
  showAssignDeassignPersonForm(actors,directors,productions){
    console.log("TestAssDess");
  }
  showAddRemoveCategoryForm(categories){
    console.log("TestAddRem");

  }
  showNewPersonForm(){
    console.log("TestNewPers");

  }
  showRemovePersonForm(actors, directors){
    console.log("TestRemPers");

  }
}

export default videoSystemView;