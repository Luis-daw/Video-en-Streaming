"use strict";
class VideoSystem {
    #name;
    #systemUsers = [];
    #productions = [];
    #categories = [];
    #actors = [];
    #directors = [];
    /*
    
    Categorias{
        category: object category
        productions: array productions.
    }
    Actors{
        category: object person
        productions: array productions.
    }
    Directors{
        category: object person
        productions: array productions.
    }
    
    */
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
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
        //Meter iterador
    }
    get productions() {
        //Meter iterador
    }
    get actors() {
        //Meter iterador
    }
    addCategory = function (category) {
        if (!(category instanceof Category)) throw "Hola";
        if (this.#categories.findIndex((elem) => elem.category == category) != -1) throw "Hola";
        let cat = {
            category: category,
            productions: []
        }
        return this.#categories.push(cat);
    }
    removeCategory = function (category) {
        if (!(category instanceof Category)) throw "Hola";
        let pos = this.#categories.findIndex((elem) => elem.category == category);
        if (pos == -1) throw "Hola";
        this.#categories.splice(pos, 1);
        return this.#categories.length;
    }
    addUser = function (user) {
        if (!(user instanceof User));
        if (this.#systemUsers.findIndex((elem) => elem.username == user.username) != -1) throw "Hola";
        if (this.#systemUsers.findIndex((elem) => elem.email == user.email) != -1) throw "Hola";
        return this.#systemUsers.push(user);
    }
    removeUser = function (user) {
        if (!(user instanceof User));
        let pos = this.#systemUsers.findIndex((elem) => elem.username == user.username);
        if (pos == -1) throw "Hola";
        this.#systemUsers.splice(pos, 1);
        return this.#systemUsers.length;
    }
    addProduction = function (production) {
        if (!(production instanceof Production));
        if (this.#productions.findIndex((elem) => elem.title == production.title) != -1) throw "Hola";
        return this.#productions.push(production);
    }
    removeProduction = function (production) {
        if (!(production instanceof Production));
        let pos = this.#productions.findIndex((elem) => elem.title == production.title);
        if (pos == -1) throw "Hola";
        this.#productions.splice(pos, 1);
        return this.#productions.length;
    }
    addActor = function (actor) {
        if (!(actor instanceof Person)) throw "Hola";
        if (this.#actors.findIndex((elem) => elem.actor == actor) != -1) throw "Hola";
        let act = {
            actor: actor,
            productions: []
        }
        return this.#actors.push(act);
    }
    removeActor = function (actor) {
        if (!(actor instanceof Person)) throw "Hola";
        let pos = this.#actors.findIndex((elem) => elem.actor == actor);
        if (pos == -1) throw "Hola";
        this.#actors.splice(pos, 1);
        return this.#actors.length;
    }
    addDirector = function (director) {
        if (!(director instanceof Person)) throw "Hola";
        if (this.#directors.findIndex((elem) => elem.director == director) != -1) throw "Hola";
        let dir = {
            director: director,
            productions: []
        }
        return this.#directors.push(dir);
    }
    removeDirector = function (director) {
        if (!(director instanceof Person)) throw "Hola";
        let pos = this.#directors.findIndex((elem) => elem.director == director);
        if (pos == -1) throw "Hola";
        this.#directors.splice(pos, 1);
        return this.#directors.length;
    }
    assignCategory(category, ...productions) {
        if (!(category instanceof Category));
        if (productions.length === 0) throw "TEST";
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
        return this.#categories[pos].productions.length; S
    }
    deassignCategory(category, ...productions) {
        if (!(category instanceof Category));
        if (productions.length === 0) throw "TEST";
        let pos = this.#categories.findIndex((elem) => elem.category == category);
        let pos2;
        productions.forEach(production => {
            pos2 = this.#productions.findIndex((elem) => elem == production);
            this.#categories[pos].productions.splice(pos2, 1);
        });
        return this.#categories[pos].productions.length;
    }
    assignDirector(director, ...productions) {
        if (!(director instanceof Person));
        if (productions.length === 0) throw "TEST";
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
    deassignDirector(director, ...productions) {
        if (!(director instanceof Person));
        if (productions.length === 0) throw "TEST";
        let pos = this.#directors.findIndex((elem) => elem.director == director);
        let pos2;
        productions.forEach(production => {
            pos2 = this.#productions.findIndex((elem) => elem == production);
            this.#directors[pos].productions.splice(pos2, 1);
        });
        return this.#directors[pos].productions.length;
    }
    assignActor(actor, ...productions) {
        if (!(actor instanceof Person));
        if (productions.length === 0) throw "TEST";
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
    deassignActor(actor, ...productions) {
        if (!(actor instanceof Person));
        if (productions.length === 0) throw "TEST";
        let pos = this.#actors.findIndex((elem) => elem.actor == actor);
        let pos2;
        productions.forEach(production => {
            pos2 = this.#productions.findIndex((elem) => elem == production);
            this.#actors[pos].productions.splice(pos2, 1);
        });
        return this.#actors[pos].productions.length;
    }
    getCast(production) {
        if (!(production instanceof Production)) throw "Holaas";
    }
    getProductionsDirector(director) {
        if (!(director instanceof Person)) throw "Holaas";
    }
    getProductionsActor(actor) {
        if (!(actor instanceof Person)) throw "Holaas";
    }
    getProductionsCategory(category) {
        if (!(category instanceof Category)) throw "Holaas";
    }
    getCategory() {
        return this.#categories;
    }
}