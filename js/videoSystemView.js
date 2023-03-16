"use strict";
import {
  showFeedBack, defaultCheckElement, newProductionValidation, removeProductionValidation,
  assignDeassignPersonValidation, addRemoveCategoriesValidation, addPersonValidation,
  removePersonValidation, loginValidation
} from "./validation.js";

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
  //     console.log(this.dataset.production);
  //     this.#excecuteHandler(handler, [this.dataset.production], "body", { action: "showCast", production: this.dataset.production }, "#production", event);
  //   });
  //   this.mainCarousel.find("a").click((event) => {
  //     console.log(this.dataset.production);
  //     console.log(this);
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
  bindAdminMenu(handlerNewProduction, handlerRemoveProduction, handlerAssignDeassignPerson, handlerAddRemoveCategory, handlerNewPerson, handlerRemovePerson,handlerBackup) {
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
    $('#executeBackup').click((event) => {
      handlerBackup();
    });
  }
  bindLogin(handler){
    console.log("Entra bind")
    $("#btnLogin").click((event) => {
      this.#excecuteHandler(handler, [], 'body', { action: 'login' }, '#login', event);
    });
  }
  productionsCarousel(productions) {
    this.mainCarousel.empty();
    let first = true;
    let content = `
    <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel">
      <div class="carousel-inner">`;
    productions.forEach(production => {
      console.log(production.image);
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
			<a id="executeBackup" class="dropdown-item" href="#ExecuteBackup">Realizar copia de seguridad</a>
		</div>
    </li>`);
    this.navContent.append(li);
  }
  showNewProductionForm(directors, actors, categories) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    let add = `
    <div id="form">
    <form class="row g-3 needs-validation" id="newProductionForm" novalidate>
      <div class="col-lg-4 col-md-6">
        <label for="title" class="form-label">Titulo</label>
        <input type="text" class="form-control" id="title" placeholder="Título" minlength="4" required>
        <div class="valid-feedback">
          El título está bien introducido.
        </div>
        <div class="invalid-feedback">
          El título es demasiado corto.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="publication" class="form-label">Fecha de publicación:</label>
        <input type="date" class="form-control" id="publication" required>
        <div class="valid-feedback">
          Fecha seleccionada correctamente.
        </div>
        <div class="invalid-feedback">
          Selecciona una fecha
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="nationality" class="form-label">Nacionalidad</label>
        <input type="text" class="form-control" id="nationality" placeholder="Nacionalidad" minlength="4">
        <div class="valid-feedback">
          La nacionalidad está bien introducida.
        </div>
        <div class="invalid-feedback">
          La nacionalidad introducida es demasiado corta.
        </div>
      </div>
      <div class="col-md-8">
        <label for="sinopsis" class="form-label">Sinopsis</label>
        <input type="text" class="form-control" name="sinopsis" id="sinopsis" placeholder="Sinopsis" minlength="20">
        <div class="valid-feedback">
          La sinopsis está bien introducida.
        </div>
        <div class="invalid-feedback">
          La sinopsis es demasiado corta.
        </div>
      </div>
      <div class="col-md-4">
        <label for="image" class="form-label">Seleccione una imagen</label>
        <input type="file" class="form-control" id="image">
        <div class="invalid-feedback">
          El archivo no es una imagen
        </div>
        <div class="valid-feedback">
          Imagen bien introducida.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="selectDirectors" class="form-label">Selecciona un director</label>
        <select class="form-select" id="selectDirectors" multiple>
          `
    for (const director of directors) {
      add += `<option value="${director.name}">${director.name}</option>`
    }
    add += `</select>
        <div class="invalid-feedback">
          Selecciona algo.
        </div>
        <div class="valid-feedback">
          Directores seleccionados.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="selectActors" class="form-label">Selecciona el casting</label>
        <select class="form-select" id="selectActors" multiple>
          `
    for (const actor of actors) {
      add += `<option value="${actor.name}">${actor.name}</option>`
    }
    add += `</select>
        <div class="invalid-feedback">
          Selecciona algo.
        </div>
        <div class="valid-feedback">
          Actores seleccionados.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="selectCategories" class="form-label">Selecciona categorias</label>
        <select class="form-select" id="selectCategories" multiple>
          `
    for (const category of categories) {
      add += `<option value="${category.name}">${category.name}</option>`
    }
    add += `</select>
        <div class="invalid-feedback">
          Selecciona algo.
        </div>
        <div class="valid-feedback">
          Categorias seleccionados.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <button class="btn btn-primary" type="submit">Agregar produccion</button>
      </div>
    </form>
  </div>
    `;
    this.mainContent.append(add);
  }
  showRemoveProductionForm(productions) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    let content = `
    <div id="form">
    <form class="row g-3 needs-validation" id="removeProductionForm" novalidate>
      <div class="col-md-6">
        <label for="selectProductions" class="form-label"> Selecciona las producciones a eliminar </label>
          <select class="form-select" id="selectProductions" multiple>
          `;
    for (const production of productions) {
      content += `<option value="${production.title}">${production.title}</option>`
    }
    content += `</select>
        <div class="invalid-feedback">
          Selecciona al menos una produccion.
        </div>
        <div class="valid-feedback">
          Porducciones seleccionadas.
        </div>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary" type="submit">Eliminar produccion</button>
      </div>
    </form>
    </div>
    `
    this.mainContent.append(content);
  }
  showAssignDeassignPersonForm(typePerson, persons, name, haveProductions, notHaveProductions) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    let content = `
    <div id="form">
    <form class="row g-3 needs-validation" id="assignDeassignForm" novalidate>
      <div class="col-md-6">
        <label for="selectTypePerson" class="form-label"> Selecciona actores o directores </label>
          <select class="form-select" id="selectTypePerson">
            <option value=""></option> `;
            if(!typePerson){
              content+= `
              <option value="actors">Actores</option> 
              <option value="directors">Directores</option> `;
            }
            else if(typePerson == "actors"){
              content+= `
              <option value="actors" selected>Actores</option> 
              <option value="directors">Directores</option> `;
            }
            else if(typePerson == "directors"){
              content+= `
              <option value="actors">Actores</option> 
              <option value="directors" selected>Directores</option> `;
            }
          content+=`</select>
        <div class="invalid-feedback">
          Selecciona al menos una produccion.
        </div>
        <div class="valid-feedback">
          Porducciones seleccionadas.
        </div>
      </div>`;
    if (persons) {
      console.log("Existen las personas");
      content += `<div class="col-md-6">
        <label for="selectPerson" class="form-label"> Selecciona la persona </label>
          <select class="form-select" id="selectPerson">
            <option value=""></option> `;
      for (const person of persons) {
        if (person.name != name){
          content+=`<option value="${person.name}">${person.name}</option>`;
        }
        else{
          content+=`<option value="${person.name}" selected>${person.name}</option>`;
        }
      }
      content += `</select>
        <div class="invalid-feedback">
          Selecciona al menos una produccion.
        </div>
        <div class="valid-feedback">
          Porducciones seleccionadas.
        </div>
      </div>`;
      if (haveProductions || notHaveProductions) {
        content += `
        <div class="col-md-12 text-center">
          <h3> Seleccione las producciones a añadir o quitar </h3> 
        </div>
        <div class="col-md-6">
        <label for="selectHaveProduction" class="form-label"> Producciones asignadas </label>
          <select class="form-select" id="selectHaveProduction" multiple>
       `;
        for (const production of haveProductions) {
          content+=`<option value="${production.title}">${production.title}</option>`;
        }
        content += `</select>
          <div class="invalid-feedback">
            Selecciona al menos una produccion.
          </div>
          <div class="valid-feedback">
            Producciones seleccionadas.
          </div>
        </div>
        <div class="col-md-6">
        <label for="selectNotHaveProduction" class="form-label"> Producciones sin asignar </label>
          <select class="form-select" id="selectNotHaveProduction" multiple>
             `;
        for (const production of notHaveProductions) {
          content+=`<option value="${production.title}">${production.title}</option>`;
        }
        content += `</select>
          <div class="invalid-feedback">
            Selecciona al menos una produccion.
          </div>
          <div class="valid-feedback">
            Producciones seleccionadas.
          </div>
        </div>
        <div class="col-lg-12">
          <button class="btn btn-primary" type="submit">Realizar cambios</button>
          <button class="btn btn-primary" type="reset">Reiniciar</button>
        </div>
        `;

      }
    }
    content += `
    </form>
    </div>
    `
    this.mainContent.append(content);
  }
  showAddRemoveCategoryForm(type, cat) {
    this.mainContent.empty();
    this.mainCarousel.empty();
    let content = ``;
    if (!type) {
      content = `
    <div id="form">
      <form class="row g-3 needs-validation" id="typeCategory" novalidate>
      <div class="col-md-4">
        <label for="selecTypeCategory" class="form-label">Selecciona la acción</label>
        <select class="form-select" id="selecTypeCategory">
          <option value=""></option>
          <option value="crear">Añadir categoria</option>
          <option value="eliminar">Eliminar categoria</option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>   
      </form>
    </div> 
    `;
    }
    else {
      if (!cat) {
        content = `
    <div id="form">
      <form class="row g-3 needs-validation" id="addCategory" novalidate>
      <div class="col-md-4">
        <label for="selecTypeCategory" class="form-label">Selecciona la acción</label>
        <select class="form-select" id="selecTypeCategory">
          <option value=""></option>
          <option value="crear" selected>Añadir categoria</option>
          <option value="eliminar">Eliminar categoria</option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>
      <div class="col-md-4">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" placeholder="Nombre" minlength="4" required>
        <div class="valid-feedback">
          El nombre de la categoría está bien introducido.
        </div>
        <div class="invalid-feedback">
          El nombre es demasiado corto.
        </div>
      </div>
      <div class="col-md-4">
        <label for="description" class="form-label">Descripción</label>
        <input type="text" class="form-control" id="description" placeholder="Descripcion">
        <div class="valid-feedback">
          El nombre de la categoría está bien introducido.
        </div>
        <div class="invalid-feedback">
          El nombre es demasiado corto.
        </div>
      </div>
      <div class="col-lg-12">
        <button class="btn btn-primary" type="submit">Agregar persona</button>
        <button class="btn btn-primary" type="reset">Reiniciar</button>
      </div>
      </form>
    </div> 
    `;
      }
      else {
        content = `
    <div id="form">
      <form class="row g-3 needs-validation" id="removeCategory" novalidate>
      <div class="col-md-4">
        <label for="selecTypeCategory" class="form-label">Rol de la persona</label>
        <select class="form-select" id="selecTypeCategory">
          <option value=""></option>
          <option value="crear">Añadir categoria</option>
          <option value="eliminar" selected>Eliminar categoria</option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>   
      <div class="col-md-4">
        <label for="selecEliminateCategory" class="form-label">Selecciona las categorias</label>
        <select class="form-select" id="selecEliminateCategory" multiple>`;
        for (const category of cat) {
          content += `<option value="${category.name}">${category.name}</option>`;
        }
        content += `</select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div> 
      <div class="col-lg-12">
        <button class="btn btn-primary" type="submit">Agregar persona</button>
        <button class="btn btn-primary" type="reset">Reiniciar</button>
      </div>  
      </form>
    </div> 
    `;
      }
    }

    this.mainContent.append(content);
  }
  showNewPersonForm() {
    this.mainContent.empty();
    this.mainCarousel.empty();
    //name, lastname1, born, lastname2 = "", picture = ""
    this.mainContent.append(`
    <div id="form">
    <form class="row g-3 needs-validation" id="newPersonForm" novalidate>
      <div class="col-lg-4 col-md-6">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" placeholder="Nombre" minlength="4" required>
        <div class="valid-feedback">
          El nombre está bien introducido.
        </div>
        <div class="invalid-feedback">
          El nombre es demasiado corto.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="lastname1" class="form-label">Primer apellido</label>
        <input type="text" class="form-control" id="lastname1" minlength="4" required>
        <div class="valid-feedback">
          El apellido está bien introducido.
        </div>
        <div class="invalid-feedback">
          El apellido es demasiado corto.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="lastname2" class="form-label">Segundo apellido</label>
        <input type="text" class="form-control" id="lastname2" minlength="4">
        <div class="valid-feedback">
        </div>
        <div class="invalid-feedback">
          El apellido es demasiado corto.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="born" class="form-label">Fecha de nacimiento</label>
        <input type="date" class="form-control" id="born" required>
        <div class="valid-feedback">
          Fecha seleccionada correctamente.
        </div>
        <div class="invalid-feedback">
          Selecciona una fecha
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="picture" class="form-label">Foto</label>
        <input type="file" class="form-control" id="picture">
        <div class="valid-feedback">
          La nacionalidad está bien introducida.
        </div>
        <div class="invalid-feedback">
          La nacionalidad introducida es demasiado corta.
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <label for="selecType" class="form-label">Trabajo de la persona</label>
        <select class="form-select" id="selecType">
          <option value=""></option>
          <option value="actor">Actor</option>
          <option value="director">Director</option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>
      <div class="col-lg-12">
        <button class="btn btn-primary" type="submit">Agregar persona</button>
        <button class="btn btn-primary" type="reset">Reiniciar</button>
      </div>
    </form>
  </div>
    `
    );
  }
  showRemovePersonForm(persons) {

    if (persons) {
      let content = ``;
      for (const person of persons) {
        content += `<option value="${person.name}">${person.name}</option>`;
      }
      $("#selecPers").empty();
      $("#selecPers").append(content);
      $("#botones").empty();
      $("#botones").append(`
      <button class="btn btn-primary" type="submit">Eliminar persona</button>
      <button class="btn btn-primary" type="reset">Reiniciar</button>
      `)
    }
    else {
      this.mainContent.empty();
      this.mainCarousel.empty();
      this.mainContent.append(`
      <div id="form">
      <form class="row g-3 needs-validation" id="removePersonForm" novalidate>
      <div class="col-md-6">
        <label for="selecTypePerson" class="form-label">Rol de la persona</label>
        <select class="form-select" id="selecTypePerson">
          <option value=""></option>
          <option value="actor">Actor</option>
          <option value="director">Director</option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>
      <div class="col-md-6">
        <label for="selecPers" class="form-label">Elige personas a eliminar</label>
        <select class="form-select" id="selecPers" multiple>
          <option value=""></option>
        </select>
        <div class="valid-feedback">
          Opcion elegida.
        </div>
        <div class="invalid-feedback">
          Elige una opcion.
        </div>
      </div>
      <div class="col-lg-12" id="botones">
      </div>
    </form>
  </div>
    `
      );
    }
  }
  bindNewProductionForm(handler) {
    newProductionValidation(handler);
  }
  bindRemoveProductionForm(handler) {
    removeProductionValidation(handler);
  }
  bindAssignDeassignPersonForm(handler, callHandler) {
    assignDeassignPersonValidation(handler);
    $("#selectTypePerson").change(function (event){
      callHandler(this.value);
    });
    $("#selectPerson").change(function (event){
      callHandler($("#selectTypePerson")[0].value, this.value);
    });
  }
  bindAddRemoveCategoryForm(handlerAdd, handlerRem, callHandler) {
    addRemoveCategoriesValidation(handlerAdd, handlerRem);
    $("#selecTypeCategory").change(function (event) {
      callHandler(this.value);
    });
  }
  bindNewPersonForm(handler) {
    addPersonValidation(handler);
  }
  bindRemovePersonForm(handler, callHandler) {
    $("#selecTypePerson").unbind();
    removePersonValidation(handler);
    $("#selecTypePerson").change(function (event) {
      callHandler(this.value);
    });
  }
  showModal(done, title, message, error){
    if (done){
      let modal = `
        <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="showModal">${title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${message}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      `;
      $('body').append(modal);
			let myModal = $('#showModal');
			myModal.modal('show');
      myModal.find('button').click(() => {
				myModal.on('hidden.bs.modal', function (event) {
					document.forms[0].reset();
          document.forms[0][0].focus();
					this.remove();
				});
				myModal.modal('hide');
			})
    }
    else{
      $("#msg").remove();
      if(error.message){
        this.mainContent.prepend(`<div class="error text-danger p-3" id="msg">${error.message}</div>`);
      }
      else{
        this.mainContent.prepend(`<div class="error text-danger p-3" id="msg">${error}</div>`);
      }
    }
  }
  showLoginMenu(){
    let logout = $("#btnLogout");
    if (logout){
      $(logout).parent().remove();
    }
    let li = $(`<li class="nav-item">
      <a class="nav-link" id="btnLogin" href="#login">Login</a>
    </li>`);
    this.navContent.append(li);
  }
  showLogin(){
    this.mainCarousel.empty();
    this.mainContent.empty();
    let login=`<div id="form">
    <form class="row g-3 needs-validation" id="loginForm" novalidate>
      <div class="col-md-6">
        <label for="user" class="form-label">Nombre de usuario</label>
        <input type="text" class="form-control" id="user" placeholder="Usuario" minlength="4" required>
        <div class="valid-feedback">
          El nombre de usuario está bien introducido.
        </div>
        <div class="invalid-feedback">
          El nombre de usuario es demasiado corto.
        </div>
      </div>
      <div class="col-md-6">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Título" minlength="4" required>
        <div class="valid-feedback">
          La contraseña está bien introducida.
        </div>
        <div class="invalid-feedback">
          La contraseña es demasiado cortañ.
        </div>
      </div>
      <div class="col-lg-12">
        <button class="btn btn-primary" type="submit">Login</button>
        <button class="btn btn-primary" type="reset">Reiniciar</button>
      </div>
    </form>
    </div>  
      `;
      this.mainContent.append(login);
  }
  bindLoginForm(handler){
    loginValidation(handler);
  }
  showUsernameInMenu(username){
    $("#mensaje").empty();
    $("#mensaje").append("Bienvenido "+username);
  }
  showWelcomeMessage(){
    $("#mensaje").empty();
    $("#mensaje").append("Bienvenido");
  }
  showLogout(){
    let login = $("#btnLogin");
    if (login){
      $(login).parent().remove();
    }
    let li = $(`<li class="nav-item">
      <a class="nav-link" id="btnLogout" href="#logout">Logout</a>
    </li>`);
    this.navContent.append(li);
  }
  bindLogout(handler){
    $("#btnLogout").click(function (event) {
      handler();
    });
  }
}
export default videoSystemView;