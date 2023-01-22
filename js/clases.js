"use strict";
import { BaseException,
    InvalidValueException,
    AbstractClassException} from "./generalExceptions.js";
//Excepciones de las clases.


/**
 * Clase person
 */
class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

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
}

//Clase abstracta Production
class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;
    constructor(title, nationality, publication, synopsis, image) {
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
        this.#image = image;
    }
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
    toString() {
        return `Titulo: ${this.#title}, nacionalidad: ${this.#nationality}, publicada: ${this.#publication}, sinopsis: ${this.#synopsis} `;
    }
}

/**
 * Clase Movie
 */
class Movie extends Production {
    #resource;
    #locations;
    constructor(title, nationality, publication, synopsis, image, resource = Resource, locations = []) {

        super(title, nationality, publication, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;
    }
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
        return `Recurso: ${this.#resource.toString()}, localizaciones: ${this.#locations.toString()}`;
    }
}

/**
 * Clase Serie
 */
class Serie extends Production {
    #resource;
    #locations;
    #seasons;
    constructor(title, nationality, publication, synopsis, image, resource = Resource, locations = [], seasons = 1) {
        super(title, nationality, publication, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;
        this.#seasons = seasons;
    }
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
        return `Recurso: ${this.#resource.toString()}, localizaciones: ${this.#locations.toString()}, temporadas: ${this.#seasons}`;
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

export { Person, Category, Resource, Production, Movie, Serie, User, Coordinate };