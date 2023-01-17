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
        if (this.#productions.findIndex((elem) => elem == production) != -1) throw "Hola";
        return this.#productions.push(production);
    }
    removeProduction = function (production) {
        if (!(production instanceof Production));
        let pos = this.#productions.findIndex((elem) => elem == production);
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
        if (productions == null);
        let pos = this.#categories.findIndex((elem) => elem.category == category);
        if (pos === -1){
            pos = this.addCategory(category) -1;
        }
        let i = 0;
        productions.forEach(production => {
            if (this.#productions.findIndex((elem) => elem == production) == -1){
                this.addProduction(production);
            }
            this.#categories[pos].productions.push(production);
            i++;
        });
        return i;
    }
    deassignCategory(category, ...productions) {
        if (!(category instanceof Category));
        if (productions == null);
        let pos = this.#categories.findIndex((elem) => elem.category == category);
        if (pos === -1){
            pos = this.addCategory(category) -1;
        }
        let i = 0;
        productions.forEach(production => {
            if (this.#productions.findIndex((elem) => elem == production) == -1){
                this.addProduction(production);
            }
            this.#categories[pos].productions.push(production);
            i++;
        });
        return i;
    }
}