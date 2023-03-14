"use strict";
import { BaseException,
    InvalidValueException,
    AbstractClassException} from "./generalExceptions.js";

/**
 * Clase person
 */
class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;
    //Añadir fotos de personas
    constructor(name, lastname1, born, lastname2 = "", picture = "") {
        if (name == null) throw new InvalidValueException();
        if (lastname1 == null) throw new InvalidValueException();
        if (!(born instanceof Date)) throw new InvalidValueException();
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;
    }

    //Getter y setters

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get lastname1() {
        return this.#lastname1;
    }
    set lastname1(lastname1) {
        this.#lastname1 = lastname1;
    }
    get lastname2() {
        return this.#lastname2;
    }
    set lastname2(lastname2) {
        this.#lastname2 = lastname2;
    }
    get born() {
        return this.#born;
    }
    set born(born) {
        this.#born = born;
    }
    get picture() {
        return this.#picture;
    }
    set picture(picture) {
        this.#picture = picture;
    }

    toString() {
        return `Nombre: ${this.#name} apellidos: ${this.#lastname1} ${this.#lastname2} fecha de nacimiento: ${this.#born}`
    }
    mostrarContenidoEnPagina(){        
        return `<p>
        Nombre completo: ${this.#name} ${this.#lastname1} ${this.#lastname2} con fecha de nacimiento: ${this.#born.getFullYear()}
         </p>`;
    }
}

/**
 * Clase Category
 */
class Category {
    #name;
    #description;
    constructor(name, description = "") {
        if (name == null) throw new InvalidValueException();
        this.#name = name;
        this.#description = description;
    }

    //Getter y setters

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get description() {
        return this.#description;
    }
    set description(description) {
        this.#description = description;
    }
    toString() {
        return `Nombre de la categoria: ${this.name} descripcion: ${this.#description}`;
    }
}

/**
 * Clase Resource
 */
class Resource {
    #duration;
    #link;
    constructor(duration, link) {
        if (duration == null) throw new InvalidValueException();
        if (link == null) throw new InvalidValueException();
        this.#duration = duration;
        this.#link = link;
    }

    //Getter y setters

    get duration() {
        return this.#duration;
    }
    set duration(duration) {
        this.#duration = duration;
    }
    get link() {
        return this.#link;
    }
    set link(link) {
        this.#link = link;
    }
    toString(){
        return `Duración: ${this.#duration}h`;
    }
}

//Clase abstracta Production
class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;
    constructor(title, publication, nationality = "", synopsis = "", image = "") {
        if (new.target === Production) throw new AbstractClassException("Production");
        if (title == null) throw new InvalidValueException();
        if (nationality == null) throw new InvalidValueException();
        if (publication == null) throw new InvalidValueException();
        if (synopsis == null) throw new InvalidValueException();
        if (image == null) throw new InvalidValueException();
        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = title;
    }

    //Getter y setters

    get title() {
        return this.#title;
    }
    set title(title) {
        this.#title = title;
    }
    get nationality() {
        return this.#nationality;
    }
    set nationality(nationality) {
        this.#nationality = nationality;
    }
    get publication() {
        return this.#publication;
    }
    set publication(publication) {
        this.#publication = publication;
    }
    get synopsis() {
        return this.#synopsis;
    }
    set synopsis(synopsis) {
        this.#synopsis = synopsis;
    }
    get image() {
        return this.#image;
    }
    set image(image) {
        this.#image = image;
    }
    mostrarContenidoEnPagina(){
        return `<p>
        ${this.#title} es una producción filmada en ${this.nationality} que fue publicada en ${this.#publication}.
        Sinopsis no disponible actualmente </p>`;
    }
    toString() {
        return `Titulo: ${this.#title}, nacionalidad: ${this.#nationality}, publicada: ${this.#publication}, sinopsis: ${this.#synopsis} `;
    }
    }

/**
 * Clase Movie que hereda de Production
 */
class Movie extends Production {
    #resource;
    #locations;
    constructor(title, nationality, publication, synopsis, image, resource = new Resource(1, ""), locations = []) {
        super(title, publication, nationality, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;
    }

    //Getter y setters

    get resource() {
        return this.#resource;
    }
    set resource(resource) {
        this.#resource = resource;
    }
    get locations() {
        return this.#locations;
    }
    set locations(locations) {
        this.#locations = locations;
    }
    toString() {
        return super.toString()+`${this.#resource.toString()}`;
    }
}

/**
 * Clase Serie que hereda de Production
 */
class Serie extends Production {
    #resource;
    #locations;
    #seasons;
    constructor(title, nationality, publication, synopsis, image, resource = new Resource(1, ""), locations = [], seasons = 1) {
        super(title, publication, nationality, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    //Getter y setters

    get resource() {
        return this.#resource;
    }
    set resource(resource) {
        this.#resource = resource;
    }
    get locations() {
        return this.#locations;
    }
    set locations(locations) {
        this.#locations = locations;
    }
    get seasons() {
        return this.#seasons;
    }
    set seasons(seasons) {
        this.#seasons = seasons;
    }
    toString() {
        return super.toString()+`${this.#resource.toString()}`;        
    }
}

/**
 * Clase User
 */
class User {
    #username;
    #email;
    #password;
    constructor(username, email, password) {
        if (username == null) throw new InvalidValueException();
        if (email == null) throw new InvalidValueException();
        if (password == null) throw new InvalidValueException();
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    //Getter y setters

    get username() {
        return this.#username;
    }
    set username(username) {
        this.#username = username;
    }
    get email() {
        return this.#email;
    }
    set email(email) {
        this.#email = email;
    }
    get password() {
        return this.#password;
    }
    set password(password) {
        this.#password = password;
    }
    toString() {
        return `Nombre de usuarios: ${this.#username}, email: ${this.#email}`;
    }
}
/**
 * Clase Coordinate
 */
class Coordinate {
    #latitude;
    #longitude;
    constructor(latitude, longitude) {
        if (latitude == null) throw new InvalidValueException();
        if (longitude == null) throw new InvalidValueException();
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    //Getter y setters

    get latitude() {
        return this.#latitude;
    }
    set latitude(latitude) {
        this.#latitude = latitude;
    }
    get longitude() {
        return this.#longitude;
    }
    set longitude(longitude) {
        this.#longitude = longitude;
    }
    toString() {
        return `Latitud: ${this.#latitude}, longitud: ${this.#longitude}`;
    }
}

//Exportamos los modulos
export { Person, Category, Resource, Production, Movie, Serie, User, Coordinate };