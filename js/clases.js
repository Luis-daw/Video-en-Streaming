"use strict";
class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, born, lastname2 = "", picture = "") {
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

class Category {
    #name;
    #description;
    constructor(name, description = "") {
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

class Resource {
    #duration;
    #link;
    constructor(duration, link) {
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

//Hacer abstracta
class Production{
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;
    constructor(title, nationality, publication, synopsis, image){
        if (new.target === Production) throw "Hola";
        this.#title =  title;
        this.#nationality =  nationality;
        this.#publication =  publication;
        this.#synopsis =  synopsis;
        this.#image =  image;
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
    toString(){
        return `Titulo: ${this.#title}, nacionalidad: ${this.#nationality}, publicada: ${this.#publication}, sinopsis: ${this.#synopsis} `;
    }
}
class Movie extends Production{
    #resource;
    #locations;
    constructor(title, nationality, publication, synopsis, image, resource = Resource, locations = []){
        super(title, nationality, publication, synopsis, image);
        this.#resource = resource,
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
    toString(){
        return `Recurso: ${this.#resource.toString()}, localizaciones: ${this.#locations.toString()}`;
    }
}
class Serie extends Production{
    #resource;
    #locations;
    #seasons;
    constructor(title, nationality, publication, synopsis, image, resource = Resource, locations = [], seasons = 1){
        super(title, nationality, publication, synopsis, image);
        this.#resource = resource,
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
    toString(){
        return `Recurso: ${this.#resource.toString()}, localizaciones: ${this.#locations.toString()}, temporadas: ${this.#seasons}`;
    }
}

class User{
    #username;
    #email;
    #password;
    constructor(username, email, password){
        this.#username = username;
        this.#email=email;
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
    toString(){
        return `Nombre de usuarios: ${this.#username}, email: ${this.#email}`;
    }
}
class Coordinate{
    #latitude;
    #longitude;
    constructor(latitude, longitude){
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
    toString(){
        return `Latitud: ${this.#latitude}, longitud: ${this.#longitude}`;
    }
}