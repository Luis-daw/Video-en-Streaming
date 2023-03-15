import { Movie, Serie, User, Person } from "./clases.js";
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

        prod1.image = "./img/ChicagoPD.jpg";
        prod2.image = "./img/TheWitcher.jpg";
        prod3.image = "./img/Uncharted.jpg";
        prod4.image = "./img/NationalTreasure.jpg";
        prod5.image = "./img/JuegoDeTronos.jpg";
        prod6.image = "./img/UmbrellaAcademy.jpg";
        prod7.image = "./img/HarryPotter.jpg";
        prod8.image = "./img/Anillos.jpg";
        prod9.image = "./img/NoMiresArriba.jpg";
        prod10.image = "./img/Intocables.jpg";
        prod11.image = "./img/Simpsons.jpg";
        prod12.image = "./img/RickyMorty.jpg";

        let usr1 = this.#videoSystemModel.getUsers("luis", "luis@gmail.com", "123");
        let usr2 = this.#videoSystemModel.getUsers("admin", "admin@gmail.com", "admin");

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

        this.#videoSystemModel.addUser(usr1);
        this.#videoSystemModel.addUser(usr2);
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
    #loadVideoSystemObjectsJSON() {
        let ref = this;
        fetch("./js/datos.json")
            .then(function(result){
                return result.json();
            })
            .then(function(data){
                data.users.forEach(user => {
                    let usr = ref.#videoSystemModel.getUsers(user.username, user.email, user.password);
                    ref.#videoSystemModel.addUser(usr);
                });
                data.categories.forEach(category => {
                    let cat = ref.#videoSystemModel.getCategory(category.name, category.description);
                    ref.#videoSystemModel.addCategory(cat);
                });
                data.series.forEach(serie => {
                    let prod = new Serie(serie.title, serie.nationality, new Date(serie.publicationDate), serie.synopsis, serie.image);
                    prod.image = serie.image;
                    console.log(prod);
                    ref.#videoSystemModel.addProduction(prod);
                   
                });
                data.movies.forEach(movie => {
                    let prod = new Movie(movie.title, movie.nationality, new Date(movie.publicationDate), movie.synopsis, movie.image);
                    prod.image = movie.image;
                    ref.#videoSystemModel.addProduction(prod);
                });
                data.directors.forEach(director => {
                    let dir = ref.#videoSystemModel.getDirector(director.name, director.lastname1, new Date(director.born), director.lastname2, director.picture);
                    ref.#videoSystemModel.addDirector(dir);
                });
                data.actors.forEach(actor => {
                    let act = ref.#videoSystemModel.getActor(actor.name, actor.lastname1, new Date(actor.born), actor.lastname2, actor.picture);
                    ref.#videoSystemModel.addActor(act);
                });
                
            })
            .then(function (){
                ref.onLoad();
                ref.onInit();
            });
    }
    constructor(videoSystemModel, videoSystemView) {
        this.#videoSystemModel = videoSystemModel;
        this.#videoSystemView = videoSystemView;
        this.arrayProductions;
        this.#loadVideoSystemObjectsJSON();
    }
    onInit = () => {
        let categories = this.#videoSystemModel.categories;
        this.handleProductionsCarousel();
        this.#videoSystemView.showCategoriesType(categories);
        this.#videoSystemView.bindProductionsCategoryList(this.handleProductionsCategoryList);
        this.#videoSystemView.bindProductionsCategoryListInMenu(this.handleProductionsCategoryList);
    }

    onLoad = () => {
        // this.#loadVideoSystemObjects();
        
        //this.#videoSystemView.showCategoriesType(this.#videoSystemModel.categories);
        this.#videoSystemView.bindInit(this.handleInit.bind(this, this.#videoSystemModel.categories));
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
        let user = this.getCookie("username");
        if (!user) {
            this.#videoSystemView.showLoginMenu();
            this.#videoSystemView.bindLogin(this.handleLogin);
        }
        else {
            this.#videoSystemView.showUsernameInMenu(user);
            this.#videoSystemView.showLogout();
            this.#videoSystemView.bindLogout(this.handleLogout);
        }
    }
    getCookie(cname) {
        let re = new RegExp('(?:(?:^|.*;\\s*)' + cname +
            '\\s*\\=\\s*([^;]*).*$)|^.*$');
        return document.cookie.replace(re, "$1");
    }
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
        this.#videoSystemView.bindRemoveProductionForm(this.handleDeleteProduction);
    }
    handleAssignDeassignPerson = (typePerson, person) => {
        console.log(typePerson);
        console.log(person);
        if (!typePerson) {
            this.#videoSystemView.showAssignDeassignPersonForm();
        }
        else if (typePerson == "actors") {
            let actors = this.#videoSystemModel.actors;
            if (person) {
                let actor = this.#videoSystemModel.getActor(person);
                let haveProductions = this.#videoSystemModel.getProductionsActor(actor);
                let notHaveProductions = this.#videoSystemModel.getNotHaveProductions(haveProductions);
                this.#videoSystemView.showAssignDeassignPersonForm(typePerson, actors, actor.name, haveProductions, notHaveProductions);
            }
            else {
                this.#videoSystemView.showAssignDeassignPersonForm(typePerson, actors);
            }
        }
        else if (typePerson == "directors") {
            let directors = this.#videoSystemModel.directors;
            if (person) {
                let director = this.#videoSystemModel.getDirector(person);
                let haveProductions = this.#videoSystemModel.getProductionsDirector(director);
                let notHaveProductions = this.#videoSystemModel.getNotHaveProductions(haveProductions);
                this.#videoSystemView.showAssignDeassignPersonForm(typePerson, directors, director.name, haveProductions, notHaveProductions);
            }
            else {
                this.#videoSystemView.showAssignDeassignPersonForm(typePerson, directors);
            }
        }
        let actors = this.#videoSystemModel.actors;
        let directors = this.#videoSystemModel.directors;
        let productions = this.#videoSystemModel.productions;
        this.#videoSystemView.bindAssignDeassignPersonForm(this.handleAssignDeassign, this.handleAssignDeassignPerson);
    }
    handleAddRemoveCategory = (type) => {
        if (!type) {
            this.#videoSystemView.showAddRemoveCategoryForm();
        }
        else if (type == "crear") {
            this.#videoSystemView.showAddRemoveCategoryForm(type);
        }
        else if (type == "eliminar") {
            let cat = this.#videoSystemModel.categories;
            console.log(cat);
            this.#videoSystemView.showAddRemoveCategoryForm(type, cat);
        }
        this.#videoSystemView.bindAddRemoveCategoryForm(this.handleCreateCategory, this.handleDeleteCategory, this.handleAddRemoveCategory);
    }
    handleNewPerson = () => {
        this.#videoSystemView.showNewPersonForm();
        this.#videoSystemView.bindNewPersonForm(this.handleCreatePerson);
    }
    handleRemovePerson = (typePerson) => {
        let persons;
        console.log(typePerson);
        if (!typePerson) {
            this.#videoSystemView.showRemovePersonForm();
        }
        else {
            if (typePerson == "actor") {
                persons = this.#videoSystemModel.actors;
            } else if (typePerson == "director") {
                persons = this.#videoSystemModel.directors;
            }
            this.#videoSystemView.showRemovePersonForm(persons);
        }
        this.#videoSystemView.bindRemovePersonForm(this.handleDeletePerson, this.handleRemovePerson);
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
        this.#videoSystemView.showModal(done, "Producción añadida", `La producción ${title} se ha añadido`, error);
    }
    handleDeleteProduction = (productions) => {
        let error;
        let done;
        try {
            productions.forEach(production => {
                this.#videoSystemModel.removeProduction(this.#videoSystemModel.getProductionTitle(production));
            });
            console.log("categories");
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Producciones eliminadas", `Las producciones seleccionadas se han eliminado`, error);
        this.handleRemoveProduction();
    }
    handleAssignDeassign = (typePerson, namePerson, haveProductions, notHaveProductions) => {
        let error;
        let done;
        let message;
        console.log(typePerson);
        try {
            if (typePerson == "actors") {
                let person = this.#videoSystemModel.getActor(namePerson);
                if (haveProductions) {
                    haveProductions.forEach(production => {
                        this.#videoSystemModel.deassignActor(person, this.#videoSystemModel.getProductionTitle(production));
                    });
                }
                if (notHaveProductions) {
                    notHaveProductions.forEach(production => {
                        this.#videoSystemModel.assignActor(person, this.#videoSystemModel.getProductionTitle(production));
                    });
                }
                message = `Cambios modificados en el actor ${namePerson}`;
            }
            else if (typePerson == "directors") {
                let person = this.#videoSystemModel.getDirector(namePerson);
                if (haveProductions) {
                    haveProductions.forEach(production => {
                        this.#videoSystemModel.deassignDirector(person, this.#videoSystemModel.getProductionTitle(production));
                    });
                }
                if (notHaveProductions) {
                    notHaveProductions.forEach(production => {
                        this.#videoSystemModel.assignDirector(person, this.#videoSystemModel.getProductionTitle(production));
                    });
                }
                message = `Cambios modificados en el director ${namePerson}`;
            }
            else {
                throw new Error("El tipo de persona no es actor ni director");
            }
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Producción añadida", message, error);
        this.handleAssignDeassignPerson(typePerson, namePerson);
    }
    handleCreateCategory = (name, description) => {
        let error;
        let done;
        try {
            let category = this.#videoSystemModel.getCategory(name, description);
            this.#videoSystemModel.addCategory(category);
            done = true;
            this.onAddCategory();
            this.#videoSystemView.bindProductionsCategoryListInMenu(this.handleProductionsCategoryList);
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Categoria añadida", `La categoria ${name} se ha añadido`, error);
    }
    handleDeleteCategory = (categories) => {
        let error;
        let done;
        try {
            categories.forEach(category => {
                this.#videoSystemModel.removeCategory(this.#videoSystemModel.getCategory(category));
            });
            done = true;
            this.onAddCategory();
            this.#videoSystemView.bindProductionsCategoryListInMenu(this.handleProductionsCategoryList);
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Categorias eliminadas", `Las categorias se han eliminado`, error);
        if (done) {
            this.handleAddRemoveCategory("eliminar");
        }
    }
    handleCreatePerson = (name, lastname1, born, typePerson, lastname2, picture) => {
        let error;
        let done;
        let person;
        try {
            if (typePerson == "actor") {
                console.log("actor");
                person = this.#videoSystemModel.getActor(name, lastname1, new Date(born), lastname2, picture);
                this.#videoSystemModel.addActor(person);
            }
            if (typePerson == "director") {
                console.log("director");
                person = this.#videoSystemModel.getDirector(name, lastname1, new Date(born), lastname2, picture);
                this.#videoSystemModel.addDirector(person);
            }
            console.log(person);
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Persona añadida", `La persona ${name + " " + lastname1} se ha añadido`, error);
    }
    handleDeletePerson = (typePerson, persons) => {
        let error;
        let done;
        try {
            if (typePerson == "actor") {
                persons.forEach(actor => {
                    this.#videoSystemModel.removeActor(this.#videoSystemModel.getActor(actor));
                });
            }
            else if (typePerson == "director") {
                persons.forEach(director => {
                    this.#videoSystemModel.removeDirector(this.#videoSystemModel.getDirector(director));
                });
            }
            done = true;
        } catch (exception) {
            done = false;
            error = exception;
        }
        this.#videoSystemView.showModal(done, "Persona eliminada", `Las personas seleccionadas han sido eliminadas`, error);
        if (done) {
            this.handleRemovePerson(typePerson);
        }
    }
    handleLogin = () => {
        this.#videoSystemView.showLogin();
        this.#videoSystemView.bindLoginForm(this.handleCheckLogin);
    }
    handleCheckLogin = (user, password) => {
        let error;
        let done;
        try {
            if (this.#videoSystemModel.userLogin(user, password)) {
                document.cookie = `username = ${user}`;
                this.#videoSystemView.showUsernameInMenu(user);
                this.#videoSystemView.showLogout();
                this.#videoSystemView.bindLogout(this.handleLogout);
                done = true;
            }
            else {
                done = false;
                error = "El usuario no existe en el sistema";
            }

        } catch (exception) {
            done = false;
            error = exception;
        }
        console.log(error);
        this.#videoSystemView.showModal(done, "Login hecho", `Has hecho login con el usuario ${user}`, error);
        if (done) {
            this.onInit();
        }
    }
    handleLogout = () => {
        this.setCookie("username", '', 0);
        this.#videoSystemView.showWelcomeMessage();
        this.#videoSystemView.showLoginMenu();
        this.#videoSystemView.bindLogin(this.handleLogin);
    }
}

export default videoSystemController;