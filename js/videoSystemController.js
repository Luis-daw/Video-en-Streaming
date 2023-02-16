import { Movie, Serie, User } from "./clases.js";
class videoSystemController {
    #videoSystemView;
    #videoSystemModel;

    #loadVideoSystemObjects() {
        let cat1 = this.#videoSystemModel.getCategory("Accion", "Genero accion");
        let cat2 = this.#videoSystemModel.getCategory("Fantasia", "Genero fantasia");
        let cat3 = this.#videoSystemModel.getCategory("Comedia", "Genero comedia");

        let prod1 = new Serie("Chicago PD", "Estados Unidos", 2014);
        let prod2 = new Serie("The Witcher", "Estados Unidos", 2022);
        let prod3 = new Movie("Uncharted", "Estados Unidos", 2022);
        let prod4 = new Movie("National Treasure", "Estados Unidos", 2011);
        let prod5 = new Serie("Juego de Tronos", "Estados Unidos", 2011);
        let prod6 = new Serie("The Umbrella Academy", "Estados Unidos", 2019);
        let prod7 = new Movie("Harry Potter", "Estados Unidos", 2001);
        let prod8 = new Movie("El señor de los anillos", "Estados Unidos", 2001);
        let prod9 = new Movie("No mires arriba", "Estados Unidos", 2021);
        let prod10 = new Movie("Intouchables", "Francia", 2011);
        let prod11 = new Serie("Los Simpson", "Estados Unidos", 1989);
        let prod12 = new Serie("Rick y Morty", "Estados Unidos", 2013);

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

        let dir1 = this.#videoSystemModel.getDirector("Dir1", "", new Date());
        let dir2 = this.#videoSystemModel.getDirector("Dir2", "", new Date());
        let dir3 = this.#videoSystemModel.getDirector("Dir3", "", new Date());

        let act1 = this.#videoSystemModel.getDirector("Act1", "", new Date());
        let act2 = this.#videoSystemModel.getDirector("Act2", "", new Date());
        let act3 = this.#videoSystemModel.getDirector("Act3", "", new Date());
        let act4 = this.#videoSystemModel.getDirector("Act4", "", new Date());
        let act5 = this.#videoSystemModel.getDirector("Act5", "", new Date());
        let act6 = this.#videoSystemModel.getDirector("Act6", "", new Date());

        this.#videoSystemModel.addCategory(cat1);
        this.#videoSystemModel.addCategory(cat2);
        this.#videoSystemModel.addCategory(cat3);

        this.#videoSystemModel.assignCategory(cat1, prod1, prod2, prod3, prod4);
        this.#videoSystemModel.assignCategory(cat2, prod5, prod6, prod7, prod8);
        this.#videoSystemModel.assignCategory(cat3, prod9, prod10, prod11, prod12);

        this.#videoSystemModel.addDirector(dir1);
        this.#videoSystemModel.addDirector(dir2);
        this.#videoSystemModel.addDirector(dir3);

        this.#videoSystemModel.addActor(act1);
        this.#videoSystemModel.addActor(act2);
        this.#videoSystemModel.addActor(act3);
        this.#videoSystemModel.addActor(act4);
        this.#videoSystemModel.addActor(act5);
        this.#videoSystemModel.addActor(act6);
    }
    constructor(videoSystemModel, videoSystemView) {
        this.#videoSystemModel = videoSystemModel;
        this.#videoSystemView = videoSystemView;

        console.log(this.#videoSystemModel.name);
        this.onLoad();
        this.onInit(this.#videoSystemModel.categories);
    }
    onInit = (iteratorCategories) => {
        this.#videoSystemView.init(iteratorCategories);
    }

    onLoad = () => {
        this.#loadVideoSystemObjects();
    }

    handleInit = () => {
        this.onInit();
    }
    
    showProductions = () => {
        console.log("HOla");
    }
}

export default videoSystemController;