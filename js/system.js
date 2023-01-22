"use strict";
import { Person, Category, Resource, Production, Movie, Serie, User, Coordinate } from './clases.js';
import { BaseException } from './generalExceptions.js';

//Excepciones VideoSystem
class VideoSystemException extends BaseException {
	constructor(message = "Error: Excepción general de la clase VideoSystem.",fileName, lineNumber) {
		super(message, fileName, lineNumber);
		this.name = "VideoSystemException";
	}
}
class PersonVideoSystemException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El método necesita una persona.", fileName, lineNumber);
		this.name = "PersonVideoSystemException";
	}
}
class CategoryVideoSystemException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El método necesita una categoria.", fileName, lineNumber);
		this.name = "CategoryVideoSystemException";
	}
}
class ProductionVideoSystemException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El método necesita una producción.", fileName, lineNumber);
		this.name = "ProductionVideoSystemException";
	}
}
class EmptyArrayException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El método necesita una producción o más.", fileName, lineNumber);
		this.name = "EmptyArrayException";
	}
}
class UserVideoSystemException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El método necesita un usuario.", fileName, lineNumber);
		this.name = "UserVideoSystemException";
	}
}
class OnListException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El objeto ya está en la lista.", fileName, lineNumber);
		this.name = "OnListException";
	}
}
class NotOnListException extends VideoSystemException {
	constructor(fileName, lineNumber) {
		super("Error: El objeto no está en la lista.", fileName, lineNumber);
		this.name = "NotOnListException";
	}
}


//Variable VideoSystem que tiene almacenado el método getInstance.
let VideoSystem = (function () {

    //La variable instanciada
    let instantiated;

    /**
     * Función que nos devuelve un objeto VideoSystem
     * @returns VideoSystem
     */
    function init() {
        class VideoSystem {
            #name;
            #systemUsers = [];
            #productions = [];
            #categories = [];
            #actors = [];
            #directors = [];

            #defaultCategory = new Category("Default", "Default category");
            /*
            Nuestros objetos se van a gestionar de la siguiente manera:

            name = String

            systemUsers = []

            productions = []
            Categories{
                category: object category
                productions: [array] productions.
            }
            Actors{
                category: object person
                productions: [array] productions.
            }
            Directors{
                category: object person
                productions: [array] productions.
            }
            
            */
            constructor(name) {
                this.#name = name;
                this.addCategory(this.#defaultCategory);
            }

            //getters y setters
            get name() {
                return this.#name;
            }
            set name(name) {
                this.#name = name;
            }

            //Iteradores de objetos
            get categories() {
                let array = this.#categories;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].category;
                        }
                    }
                }
            }
            get users() {
                let array = this.#systemUsers;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }
            get productions() {
                let array = this.#productions;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }
            get actors() {
                let array = this.#actors;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].actor;
                        }
                    }
                }
            }
            get directors() {
                let array = this.#directors;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].director;
                        }
                    }
                }
            }

            /**
             * Método que añade una categoría
             * @param {Category} category 
             * @returns Num
             */
            addCategory = function (category) {
                if (!(category instanceof Category)) throw new CategoryVideoSystemException();
                if (this.#categories.findIndex((elem) => elem.category == category) != -1) throw new OnListException();
                let cat = {
                    category: category,
                    productions: []
                }
                return this.#categories.push(cat);
            }
            /**
             * Método que elimina una categoría
             * @param {Category} category 
             * @returns Num
             */
            removeCategory = function (category) {
                if (!(category instanceof Category)) throw new CategoryVideoSystemException();
                let pos = this.#categories.findIndex((elem) => elem.category == category);
                if (pos == -1) throw new NotOnListException();
                this.assignCategory(this.#categories[0].category,...this.#categories[pos].productions);
                this.#categories.splice(pos, 1);
                return this.#categories.length;
            }
            /**
             * Método que añade un usuario
             * @param {User} user 
             * @returns Num
             */
            addUser = function (user) {
                if (!(user instanceof User)) throw new UserVideoSystemException();
                if (this.#systemUsers.findIndex((elem) => elem.username == user.username) != -1) throw new OnListException();
                if (this.#systemUsers.findIndex((elem) => elem.email == user.email) != -1) throw new OnListException();
                return this.#systemUsers.push(user);
            }
            /**
             * Método que elimina un usuario
             * @param {User} user 
             * @returns Num
             */
            removeUser = function (user) {
                if (!(user instanceof User)) throw new UserVideoSystemException();
                let pos = this.#systemUsers.findIndex((elem) => elem.username == user.username);
                if (pos == -1) throw new NotOnListException();
                this.#systemUsers.splice(pos, 1);
                return this.#systemUsers.length;
            }

            /**
             * Método que añade una producción
             * @param {Production} production 
             * @returns Num
             */
            addProduction = function (production) {
                if (!(production instanceof Production)) throw new ProductionVideoSystemException();
                if (this.#productions.findIndex((elem) => elem.title == production.title) != -1) throw new OnListException();
                return this.#productions.push(production);
            }
            /**
             * Método que elimina una producción
             * @param {Production} production 
             * @returns Num
             */
            removeProduction = function (production) {
                if (!(production instanceof Production)) throw new ProductionVideoSystemException();
                let pos = this.#productions.findIndex((elem) => elem.title == production.title);
                if (pos == -1) throw new NotOnListException();
                this.#productions.splice(pos, 1);
                return this.#productions.length;
            }
            /**
             * Método que añade un actor
             * @param {Person} actor 
             * @returns Num
             */
            addActor = function (actor) {
                if (!(actor instanceof Person)) throw new PersonVideoSystemException();
                if (this.#actors.findIndex((elem) => elem.actor == actor) != -1) throw new OnListException();
                let act = {
                    actor: actor,
                    productions: []
                }
                return this.#actors.push(act);
            }
            /**
             * Método que elimina un actor
             * @param {Person} actor 
             * @returns Num
             */
            removeActor = function (actor) {
                if (!(actor instanceof Person)) throw PersonVideoSystemException();
                let pos = this.#actors.findIndex((elem) => elem.actor == actor);
                if (pos == -1) throw new NotOnListException();
                this.#actors.splice(pos, 1);
                return this.#actors.length;
            }

            /**
             * Método que añade un director
             * @param {Person} director 
             * @returns Num
             */
            addDirector = function (director) {
                if (!(director instanceof Person)) throw PersonVideoSystemException();
                if (this.#directors.findIndex((elem) => elem.director == director) != -1) throw new OnListException();
                let dir = {
                    director: director,
                    productions: []
                }
                return this.#directors.push(dir);
            }

            /**
             * Método que elimina un director
             * @param {Person} director 
             * @returns Num
             */
            removeDirector = function (director) {
                if (!(director instanceof Person)) throw new PersonVideoSystemException();
                let pos = this.#directors.findIndex((elem) => elem.director == director);
                if (pos == -1) throw new NotOnListException();
                this.#directors.splice(pos, 1);
                return this.#directors.length;
            }

            /**
             * Método que asigna producciones a una categoría
             * @param {Category} category 
             * @param  {...Production} productions 
             * @returns Num
             */
            assignCategory(category, ...productions) {
                if (!(category instanceof Category)) throw new CategoryVideoSystemException();
                if (productions.length === 0) throw EmptyArrayException();
                let pos = this.#categories.findIndex((elem) => elem.category == category);
                if (pos === -1) {
                    pos = this.addCategory(category) - 1;
                }
                productions.forEach(production => {
                    if (this.#productions.findIndex((elem) => elem == production) == -1) {
                        this.addProduction(production);
                    }
                    this.#categories[pos].productions.push(production);
                });
                return this.#categories[pos].productions.length; 
            }
            /**
             * Método que elimina producciones de una categoría
             * @param {Category} category 
             * @param  {...Production} productions 
             * @returns Num
             */
            deassignCategory(category, ...productions) {
                if (!(category instanceof Category)) throw new CategoryVideoSystemException();
                if (productions.length === 0) throw new EmptyArrayException();
                let pos = this.#categories.findIndex((elem) => elem.category == category);
                let pos2;
                productions.forEach(production => {
                    pos2 = this.#categories[pos].productions.findIndex((elem) => elem == production);
                    this.#categories[pos].productions.splice(pos2, 1);
                });
                return this.#categories[pos].productions.length;
            }
            /**
             * Método que asigna producciones a un director
             * @param {Person} person 
             * @param  {...Production} productions 
             * @returns Num
             */
            assignDirector(director, ...productions) {
                if (!(director instanceof Person)) throw new PersonVideoSystemException();
                if (productions.length === 0) throw new EmptyArrayException();
                let pos = this.#directors.findIndex((elem) => elem.director == director);
                if (pos === -1) {
                    pos = this.addDirector(director) - 1;
                }
                productions.forEach(production => {
                    if (this.#productions.findIndex((elem) => elem == production) == -1) {
                        this.addProduction(production);
                    }
                    this.#directors[pos].productions.push(production);
                });
                return this.#directors[pos].productions.length;
            }
            /**
             * Método que elimina producciones de un director
             * @param {Person} person 
             * @param  {...Production} productions 
             * @returns Num
             */
            deassignDirector(director, ...productions) {
                if (!(director instanceof Person)) throw new PersonVideoSystemException();
                if (productions.length === 0) throw new EmptyArrayException();
                let pos = this.#directors.findIndex((elem) => elem.director == director);
                let pos2;
                productions.forEach(production => {
                    pos2 = this.#directors[pos].productions.findIndex((elem) => elem == production);
                    this.#directors[pos].productions.splice(pos2, 1);
                });
                return this.#directors[pos].productions.length;
            }
            /**
             * Método que asigna producciones a un actor
             * @param {Person} person 
             * @param  {...Production} productions 
             * @returns Num
             */
            assignActor(actor, ...productions) {
                if (!(actor instanceof Person)) throw new PersonVideoSystemException();
                if (productions.length === 0) throw new EmptyArrayException();
                let pos = this.#actors.findIndex((elem) => elem.actor == actor);
                if (pos === -1) {
                    pos = this.addActor(actor) - 1;
                }
                productions.forEach(production => {
                    if (this.#productions.findIndex((elem) => elem == production) == -1) {
                        this.addProduction(production);
                    }
                    this.#actors[pos].productions.push(production);
                });
                return this.#actors[pos].productions.length;
            }
            /**
             * Método que elimina producciones de un actor
             * @param {Person} person 
             * @param  {...Production} productions 
             * @returns Num
             */
            deassignActor(actor, ...productions) {
                if (!(actor instanceof Person)) throw new PersonVideoSystemException();
                if (productions.length === 0) throw new EmptyArrayException();
                let pos = this.#actors.findIndex((elem) => elem.actor == actor);
                let pos2;
                productions.forEach(production => {
                    pos2 = this.#actors[pos].productions.findIndex((elem) => elem == production);
                    this.#actors[pos].productions.splice(pos2, 1);
                });
                return this.#actors[pos].productions.length;
            }
            /**
             * Método que itera el elenco de actores que tiene una producción
             * @param {Production} production 
             * @returns iterator
             */
            getCast(production) {
                if (!(production instanceof Production)) throw new ProductionVideoSystemException();
                let array = this.#actors.filter((elem) => elem.productions.findIndex((elemProduc) => elemProduc.title == production.title) !== -1)
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].actor;
                        }
                    }
                }
            }
            /**
             * Método que itera todas las producciones de un director
             * @param {Person} director 
             * @returns iterator
             */
            getProductionsDirector(director) {
                if (!(director instanceof Person)) throw new PersonVideoSystemException();
                let pos = this.#directors.findIndex((dir) => dir.director == director);
                if (pos === -1) throw "Incorrecto";
                let array = this.#directors[pos].productions;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].director;
                        }
                    }
                }
            }
            /**
             * Método que itera todas las producciones de un actor
             * @param {Person} actor 
             * @returns iterator
             */
            getProductionsActor(actor) {
                if (!(actor instanceof Person)) throw new PersonVideoSystemException();
                let pos = this.#actors.findIndex((act) => act.actor == actor);
                if (pos === -1) throw new NotOnListException();
                let array = this.#actors[pos].productions;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].actor;
                        }
                    }
                }
            }
            /**
             * Método que itera todas las producciones de una categoría
             * @param {Category} category 
             * @returns iterator
             */
            getProductionsCategory(category) {
                if (!(category instanceof Category)) throw new CategoryVideoSystemException();
                let pos = this.#categories.findIndex((cat) => cat.category == category);
                if (pos === -1) throw new NotOnListException;
                let array = this.#categories[pos].productions;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }


            //Factorias o también conocidas como patrones de diseño flyweight, comprueban si un objeto esta añadido a la clase
            //Si está lo devuelve, si no lo crea, de esta manera se ahorra mucho espacio de memoria evitando crear los mismos objetos
            
            /**
             * Factoria de actor
             * @param {String} name 
             * @param {String} lastname1 
             * @param {Date} born 
             * @param {String} lastname2 
             * @param {String} picture 
             * @returns actor
             */
            getActor(name, lastname1, born, lastname2 = "", picture ="") {
				
				let position = this.#actors.findIndex((act) => act.actor.name === name);
				let actor;
				if (position === -1){ 
					actor = new Person(name, lastname1, born, lastname2, picture); 
				} else { 
					actor = this.#actors[position].actor;
				}
				return actor;
			}
            /**
             * Factoria de director
             * @param {String} name 
             * @param {String} lastname1 
             * @param {Date} born 
             * @param {String} lastname2 
             * @param {String} picture 
             * @returns director
             */
            getDirector(name, lastname1, born, lastname2 = "", picture ="") {
				
				let position = this.#directors.findIndex((dir) => dir.director.name === name);
				let director;
				if (position === -1){ 
					director = new Person(name, lastname1, born, lastname2, picture); 
				} else { 
					director = this.#directors[position].director;
				}
				return director;
			}
            /**
             * Factoria de categoria
             * @param {String} name 
             * @param {String} description 
             * @returns category
             */
            getCategory(name, description ="") {
				
				let position = this.#categories.findIndex((cat) => cat.category.name === name);
				let category;
				if (position === -1){ 
					category = new Category(name, description); 
				} else { 
					category = this.#categories[position].category;
				}
				return category;
			}

            /**
             * Factoria de usuario
             * @param {String} username 
             * @param {String} email 
             * @param {String} password 
             * @returns User
             */
            getUsers(username, email, password) {
				
				let position = this.#systemUsers.findIndex((user) => user.username === username);
				let user;
				if (position === -1){ 
					user = new User(username, email, password); 
				} else { 
					user = this.#systemUsers[position];
				}
				return user;
			}
            
        }
        //Creamos el objeto, lo congelamos y lo devolvemos
        let vs = new VideoSystem("Video System");
        Object.freeze(vs);
        return vs;
    }

    //Devolvemos el método getInstance que devolverá siempre la misma instancia.
    return{
		getInstance: function () {
			if (!instantiated) { 
				instantiated = init(); 
			}
			return instantiated; 
		}
    }
})();
//Exportamos por defecto VideoSystem, la variable, no la clase

export default VideoSystem;