import { Movie, Serie, User } from "./clases.js";
class videoSystemController {
    #videoSystemView;
    #videoSystemModel;
    #loadVideoSystemObjects() {
        let cat1 = this.#videoSystemModel.getCategory("Accion", "Genero accion");
        let cat2 = this.#videoSystemModel.getCategory("Fantasia", "Genero fantasia");
        let cat3 = this.#videoSystemModel.getCategory("Comedia", "Genero comedia");

        let prod1 = new Serie("Chicago PD", "Estados Unidos", new Date(2014, 1, 1));
        let prod2 = new Serie("The Witcher", "Estados Unidos", new Date(2022, 1, 1));
        let prod3 = new Movie("Uncharted", "Estados Unidos", new Date(2022, 1, 1));
        let prod4 = new Movie("National Treasure", "Estados Unidos", new Date(2011, 1, 1));
        let prod5 = new Serie("Juego de Tronos", "Estados Unidos", new Date(2011, 1, 1));
        let prod6 = new Serie("The Umbrella Academy", "Estados Unidos", new Date(2019, 1, 1));
        let prod7 = new Movie("Harry Potter", "Estados Unidos", new Date(2001, 1, 1));
        let prod8 = new Movie("El señor de los anillos", "Estados Unidos", new Date(2001, 1, 1));
        let prod9 = new Movie("No mires arriba", "Estados Unidos", new Date(2021, 1, 1));
        let prod10 = new Movie("Intouchables", "Francia", new Date(2011, 1, 1));
        let prod11 = new Serie("Los Simpson", "Estados Unidos", new Date(1989, 1, 1));
        let prod12 = new Serie("Rick y Morty", "Estados Unidos", new Date(2013, 1, 1));

        prod1.image = "../img/ChicagoPD.jpg";
        prod2.image = "../img/TheWitcher.jpg";
        prod3.image = "../img/Uncharted.jpg";
        prod4.image = "../img/NationalTreasure.jpg";
        prod5.image = "../img/JuegoDeTronos.jpg";
        prod6.image = "../img/UmbrellaAcademy.jpg";
        prod7.image = "../img/HarryPotter.jpg";
        prod8.image = "../img/Anillos.jpg";
        prod9.image = "../img/NoMiresArriba.jpg";
        prod10.image = "../img/Intocables.jpg";
        prod11.image = "../img/Simpsons.jpg";
        prod12.image = "../img/RickyMorty.jpg";

        let usr1 = this.#videoSystemModel.getUsers("luis", "luis@gmail.com", "123");

        let dir1 = this.#videoSystemModel.getDirector("Quentin", "Tarantino", new Date(1963, 0, 0, 0, 0, 0));
        let dir2 = this.#videoSystemModel.getDirector("Stanley", "Kubrick", new Date(1928, 0, 0, 0, 0, 0));
        let dir3 = this.#videoSystemModel.getDirector("Martin", "Scorsese", new Date(1942, 0, 0, 0, 0, 0));
        let dir4 = this.#videoSystemModel.getDirector("Alfred", "Hitchcock", new Date(1899, 0, 0, 0, 0, 0));
        let dir5 = this.#videoSystemModel.getDirector("Billy", "Wilder", new Date(1906, 0, 0, 0, 0, 0));

        let act1 = this.#videoSystemModel.getActor("Brad", "Pitt", new Date(1987, 0, 0, 0, 0, 0));
        let act2 = this.#videoSystemModel.getActor("Leonardo", "DiCaprio", new Date(1974, 0, 0, 0, 0, 0));
        let act3 = this.#videoSystemModel.getActor("Morgan", "Freeman", new Date(1937, 0, 0, 0, 0, 0));
        let act4 = this.#videoSystemModel.getActor("Tom", "Hanks", new Date(1980, 0, 0, 0, 0, 0));
        let act5 = this.#videoSystemModel.getActor("Marion", "Brando", new Date(1924, 0, 0, 0, 0, 0));
        let act6 = this.#videoSystemModel.getActor("Scarlett ", "Johansson ", new Date(1984, 0, 0, 0, 0, 0));
        let act7 = this.#videoSystemModel.getActor("Angelina", "Jolie", new Date(1975, 0, 0, 0, 0, 0));
        let act8 = this.#videoSystemModel.getActor("Jennifer", "Aniston", new Date(1969, 0, 0, 0, 0, 0));
        let act9 = this.#videoSystemModel.getActor("Jennifer", "Lawrence", new Date(1990, 0, 0, 0, 0, 0));
        let act10 = this.#videoSystemModel.getActor("Marilyn", "Monroe", new Date(1926, 0, 0, 0, 0, 0));

        this.#videoSystemModel.addCategory(cat1);
        this.#videoSystemModel.addCategory(cat2);
        this.#videoSystemModel.addCategory(cat3);

        this.#videoSystemModel.assignCategory(cat1, prod1, prod2, prod3, prod4);
        this.#videoSystemModel.assignCategory(cat2, prod5, prod6, prod7, prod8);
        this.#videoSystemModel.assignCategory(cat3, prod9, prod10, prod11, prod12);

        this.#videoSystemModel.addDirector(dir1);
        this.#videoSystemModel.addDirector(dir2);
        this.#videoSystemModel.addDirector(dir3);
        this.#videoSystemModel.addDirector(dir4);
        this.#videoSystemModel.addDirector(dir5);

        this.#videoSystemModel.addActor(act1);
        this.#videoSystemModel.addActor(act2);
        this.#videoSystemModel.addActor(act3);
        this.#videoSystemModel.addActor(act4);
        this.#videoSystemModel.addActor(act5);
        this.#videoSystemModel.addActor(act6);
        this.#videoSystemModel.addActor(act7);
        this.#videoSystemModel.addActor(act8);
        this.#videoSystemModel.addActor(act9);
        this.#videoSystemModel.addActor(act10);

        this.#videoSystemModel.assignActor(act1, prod1, prod2, prod3, prod4);
        this.#videoSystemModel.assignActor(act2, prod1, prod2, prod3, prod4);
        this.#videoSystemModel.assignActor(act3, prod1, prod2, prod3, prod4);
        this.#videoSystemModel.assignActor(act5, prod5, prod6, prod7, prod8);
        this.#videoSystemModel.assignActor(act4, prod5, prod6, prod7, prod8);
        this.#videoSystemModel.assignActor(act6, prod5, prod6, prod7, prod8);
        this.#videoSystemModel.assignActor(act7, prod9, prod10, prod11, prod12);
        this.#videoSystemModel.assignActor(act8, prod9, prod10, prod11, prod12);
        this.#videoSystemModel.assignActor(act9, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12);
        this.#videoSystemModel.assignActor(act10, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12);

        this.#videoSystemModel.assignDirector(dir1, prod1, prod2, prod3, prod4, prod5, prod6);
        this.#videoSystemModel.assignDirector(dir2, prod7, prod8, prod9, prod10, prod11, prod12);
        this.#videoSystemModel.assignDirector(dir3, prod1, prod2, prod6, prod7, prod10, prod12);
        this.#videoSystemModel.assignDirector(dir4, prod3, prod4, prod5, prod8, prod9, prod11);
        this.#videoSystemModel.assignDirector(dir5, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12);

    }
    constructor(videoSystemModel, videoSystemView) {
        this.#videoSystemModel = videoSystemModel;
        this.#videoSystemView = videoSystemView;
        this.arrayProductions;
        this.onLoad();
        this.onInit();
        this.#videoSystemView.bindInit(this.handleInit.bind(this, this.#videoSystemModel.categories));
    }
    onInit = () => {
        let categories = this.#videoSystemModel.categories;
        this.handleProductionsCarousel();
        this.#videoSystemView.showCategoriesType(categories);
        this.#videoSystemView.bindProductionsCategoryList(this.handleProductionsCategoryList);
        this.#videoSystemView.bindProductionsCategoryListInMenu(this.handleProductionsCategoryList);
        //this.#videoSystemView.bindCastProductionList(this.handleCastProductionList);
    }

    onLoad = () => {
        this.#loadVideoSystemObjects();
        //this.#videoSystemView.showCategoriesType(this.#videoSystemModel.categories);
        this.handleActorsAndDirectors();
        this.handleWindowsInMenu();
        this.onAddCategory();
        this.#videoSystemView.bindCloseAllWindows(this.handleCloseAllWindows);
        this.#videoSystemView.showAdminMenu();
        this.#videoSystemView.bindAdminMenu(
            this.handleNewProduction,
            this.handleRemoveProduction,
            this.handleAssignDeassignPerson,
            this.handleAddRemoveCategory,
            this.handleNewPerson,
            this.handleRemovePerson
        );

    }

    handleInit = (categories) => {
        this.onInit(categories);
    }

    onAddCategory = () => {
        this.#videoSystemView.showCategoriesInNav(this.#videoSystemModel.categories);
    }
    handleProductionsCategoryList = (name) => {
        let category = this.#videoSystemModel.getCategory(name);
        this.#videoSystemView.showProductions(this.#videoSystemModel.getProductionsCategory(category), category.name);
        this.#videoSystemView.bindCastProductionList(this.handleCastProductionList);
    }
    handleActor = (name) => {
        let actor = this.#videoSystemModel.getActor(name);
        let productions = this.#videoSystemModel.getProductionsActor(actor);
        this.#videoSystemView.showOneActor(actor, productions);
        this.#videoSystemView.bindCastProductionList(this.handleCastProductionList);
        this.#videoSystemView.bindShowActorInNewWindow(
            this.handleShowActorInNewWindow
        );
    }
    handleDirector = (name) => {
        let director = this.#videoSystemModel.getDirector(name);
        let productions = this.#videoSystemModel.getProductionsDirector(director);
        this.#videoSystemView.showOneDirector(director, productions);
        this.#videoSystemView.bindCastProductionList(this.handleCastProductionList);
        this.#videoSystemView.bindShowDirectorInNewWindow(
            this.handleShowDirectorInNewWindow
        );
    }
    handleActors = () => {
        let actors = this.#videoSystemModel.actors;
        this.#videoSystemView.showActors(actors);
        this.#videoSystemView.bindActor(this.handleActor);
    }
    handleDirectors = () => {
        let directors = this.#videoSystemModel.directors;
        this.#videoSystemView.showDirectors(directors);
        this.#videoSystemView.bindDirector(this.handleDirector);
    }
    handleCastProductionList = (title) => {
        let production = this.#videoSystemModel.getProductionTitle(title);
        this.#videoSystemView.showTeam(this.#videoSystemModel.getCast(production), this.#videoSystemModel.getDirectorsProduction(production), production);
        this.#videoSystemView.bindDirector(this.handleDirector);
        this.#videoSystemView.bindActor(this.handleActor);
        this.#videoSystemView.bindShowProductionInNewWindow(
            this.handleShowProductionInNewWindow
        );
    }
    handleActorsAndDirectors() {
        this.#videoSystemView.showActorsAndDirectors();
        this.#videoSystemView.bindDirectorsListInMenu(this.handleDirectors);
        this.#videoSystemView.bindActorsListInMenu(this.handleActors);
    }
    handleProductionsCarousel = () => {
        if (!this.arrayProductions) {
            this.arrayProductions = this.#videoSystemModel.getSomeRandomProductions(3);
        }
        this.#videoSystemView.productionsCarousel(this.arrayProductions);
        this.#videoSystemView.bindCastProductionList(this.handleCastProductionList);
    }
    handleShowProductionInNewWindow = (title) => {
        try {
            let production = this.#videoSystemModel.getProductionTitle(title);
            let actors = this.#videoSystemModel.getCast(production);
            let directors = this.#videoSystemModel.getDirectorsProduction(production);
            this.#videoSystemView.showProductionInNewWindow(production, actors, directors);
        } catch (error) {
            this.#videoSystemView.showProductionInNewWindow(null, null, null, 'No existe esta producción en la página.');
            console.error(error);
        }
    }
    handleShowDirectorInNewWindow = (name) => {
        try {
            let director = this.#videoSystemModel.getDirector(name);
            let productions = this.#videoSystemModel.getProductionsDirector(director);
            this.#videoSystemView.showDirectorInNewWindow(director, productions);

        } catch (error) {
            this.#videoSystemView.showDirectorInNewWindow(null, null, 'No existe este director en la página.');
            console.error(error);
        }
    }
    handleShowActorInNewWindow = (name) => {
        try {
            let actor = this.#videoSystemModel.getActor(name);
            let productions = this.#videoSystemModel.getProductionsActor(actor);
            this.#videoSystemView.showActorInNewWindow(actor, productions);
        } catch (error) {
            this.#videoSystemView.showDirectorInNewWindow(null, null, 'No existe este actor en la página.');
            console.error(error);
        }
    }
    handleWindowsInMenu = () => {
        this.#videoSystemView.showWindowsCloseOnMenu();
    }
    handleCloseAllWindows = (windows) => {
        windows.forEach(window => {
            window.close();
        });
    }
    handleNewProduction = () => {
        let directors = this.#videoSystemModel.directors;
        let actors = this.#videoSystemModel.actors;
        let categories = this.#videoSystemModel.categories;
        this.#videoSystemView.showNewProductionForm(directors, actors, categories);
        this.#videoSystemView.bindNewProductionForm(this.handleCreateProduction);
    }
    handleRemoveProduction = () => {
        let productions = this.#videoSystemModel.productions;
        this.#videoSystemView.showRemoveProductionForm(productions);
    }
    handleAssignDeassignPerson = () => {
        let actors = this.#videoSystemModel.actors;
        let directors = this.#videoSystemModel.directors;
        let productions = this.#videoSystemModel.productions;
        this.#videoSystemView.showAssignDeassignPersonForm(actors, directors, productions)
    }
    handleAddRemoveCategory = () => {
        let categories = this.#videoSystemView.categories;
        this.#videoSystemView.showAddRemoveCategoryForm(categories);
    }
    handleNewPerson = () => {
        this.#videoSystemView.showNewPersonForm();
    }
    handleRemovePerson = () => {
        let actors = this.#videoSystemModel.actors;
        let directors = this.#videoSystemModel.directors;
        this.#videoSystemView.showRemovePersonForm(actors, directors);
    }
    handleCreateProduction = (title, fecha, nacionalidad, sinopsis, imagen, directors, casting, categories, type) => {
        console.log("Llego al handler");
        let production;

        if (type == "movie") {
            console.log("Entra movie");
            let date = new Date(fecha);
            console.log(date.toString());
            production = new Movie(title, nacionalidad, 2020, sinopsis, imagen);
            console.log(production);
        }
        else {
            console.log("Entra serie");
            production = new Serie(title, nacionalidad, 2020, sinopsis, imagen);
        }


        console.log(production);
        let done, error;
        try {
            console.log("Llego al try");
            this.#videoSystemModel.addProduction(production);
            console.log("Addproduction");
            directors.forEach(director => {
                this.#videoSystemModel.assignDirector(this.#videoSystemModel.getDirector(director), production);
            });
            console.log("Directors");
            casting.forEach(actor => {
                this.#videoSystemModel.assignActor(this.#videoSystemModel.getActor(actor), production);
            });
            console.log("actors");
            categories.forEach(category => {
                this.#videoSystemModel.assignCategory(this.#videoSystemModel.getCategory(category), production);
            });
            console.log("categories");
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }
        console.log(done);
    }
}

export default videoSystemController;