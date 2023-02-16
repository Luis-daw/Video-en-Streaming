import {Movie, Serie} from "./clases.js";
class videoSystemController{
    #videoSystemView;
    #videoSystemModel;

    #loadVideoSystemObjects(){
        let cat1 = this.#videoSystemModel.getCategory("Accion", "Genero accion");
        let cat2 = this.#videoSystemModel.getCategory("Fantasia", "Genero fantasia");
        let cat3 = this.#videoSystemModel.getCategory("Comedia", "Genero comedia");

        let prod9 = new Movie("No mires arriba", "Estados Unidos", 2021);
        let prod10 = new Movie("Intouchables", "Francia", 2011);
        let prod11 = new Serie("Los Simpson", "Estados Unidos", 1989);
        let prod12 = new Serie("Rick y Morty", "Estados Unidos", 2013);
    }
    constructor(videoSystemView, videoSystemModel){
        this.#videoSystemModel = videoSystemModel;
        this.#videoSystemView = videoSystemView;
    }
    onInit = () => {
		this.#shoppingCartView.init();
	}

	handleInit = () => {
		this.onInit();
	}
    onLoad = () => {
		this.#loadVideoSystemObjects();
	}
}

export default videoSystemController;