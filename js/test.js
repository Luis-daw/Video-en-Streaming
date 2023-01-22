"use strict";
import {Person, Category, Resource, Movie, Serie, User, Coordinate} from "./clases.js";
import VideoSystem from "./system.js";

/**
 * Función que pasándole un iterador lo recorre y lo muestra
 * @param {*} iterator 
 */
function iterateSomething(iterator){
    for (const elem of iterator) {
        console.log(elem);
    }
}

/**
 * Función test, en esta función los console.log se pueden considerar como comentarios
 */
(function (){
    console.log("Lo primero vamos a comprobar que nuestra clase videosystem solo se puede instanciar una vez");

    let vs = VideoSystem.getInstance();
    let vs2 = VideoSystem.getInstance();
    console.log(vs === vs2);
    console.log("Ahora vamos a comprobar que nuestras factorias funcionan, para ello con el siguiente objeto vamos a añadirlo a categorias y lo vamos a volver a crear");
    let category = vs.getCategory("Accion", "Genero accion");
    vs.addCategory(category);
    console.log(category.toString());
    
    let categoryTest = vs.getCategory("Accion", "Genero accion");
    
    console.log(category === categoryTest);
    
    console.log("Vemos que da true, pero para asegurarnos, vamos a modificar el nombre de la variable categoryTest y vamos a mostrar la variable category");
    
    categoryTest.name = "Fantasia";
    
    console.log(category.toString());
    console.log("Por lo que vemos que las factorias funcionan");
    
    console.log("Ahora vamos a crear unos objetos para probar todos los métodos.");
    let category2 = vs.getCategory("Comedia", "Genero comedia");
    
    let actor = vs.getActor("Luis", "Garcia", new Date());
    let actor2 = vs.getActor("Antonio", "Astillero", new Date());
    let actor3 = vs.getActor("Gerardo", "Sanchez", new Date());
    let actor4 = vs.getActor("Miguel", "Sandoval", new Date());
    
    let director = vs.getDirector("Jose", "Molino", new Date());
    let director2 = vs.getDirector("Juan Carlos", "Santos", new Date());
    
    let movie = new Movie("Los Juegos del Hambre", "Estados Unidos", new Date(), "Pelicula ", "");
    let movie2 = new Movie("Enigma", "Estados Unidos", new Date());
    let serie = new Serie("Los Simpson", "Estados Unidos", new Date());
    let serie2 = new Serie("Breaking Bad", "Estados Unidos", new Date());
    let serie3 = new Serie("Stranger Things", "Estados Unidos", new Date());
    
    let user = vs.getUsers("Luis123112", "Luis@gmail.com", "12344asD",);
    
    console.log(category2.toString());
    console.log(actor.toString());
    console.log(actor2.toString());
    console.log(actor3.toString());
    console.log(actor4.toString());
    console.log(director.toString());
    console.log(director2.toString());
    console.log(movie.toString());
    console.log(serie.toString());
    console.log(user.toString());
    
    console.log("Vamos a añadir estos objetos mostrados a VideoSystem");
    
    vs.addCategory(category2);
    vs.addActor(actor);
    vs.addActor(actor2);
    vs.addActor(actor3);
    vs.addActor(actor4);
    
    vs.addDirector(director);
    vs.addDirector(director2);
    
    vs.addProduction(movie);
    vs.addProduction(serie);
    vs.addUser(user);
    
    console.log("Vamos a ver algunas excepciones, como añadir un usuario a una categoria, añadir dos categorias con el mismo nombre");
    
    try {
        vs.addCategory(user);
    } catch (error) {
        console.error(error);
    }
    
    try {
        vs.addCategory(category);
    } catch (error) {
        console.error(error);
    }
    
    console.log("Vamos a iteratar las producciones");
    let iterator = vs.productions;
    
    iterateSomething(iterator);
    
    console.log("Ahora vamos a añadir algunas producciones a alguna categoria, y después vamos a iterar para ver que se añaden bien");
    
    vs.assignCategory(category, movie, serie2, serie3);
    vs.assignCategory(category2, serie);
    
    iterator = vs.productions;
    
    iterateSomething(iterator);
    
    console.log("Vamos a asignar producciones a actores y directores, y vamos a tomar el casting de la serie los juegos del hambre");
    vs.assignActor(actor, movie, serie, serie2);
    vs.assignActor(actor2, movie2, serie3, serie2);
    vs.assignActor(actor3, serie2);
    vs.assignActor(actor4, movie2, serie, movie);
    
    iterator = vs.getCast(movie);
    
    iterateSomething(iterator);
    
    console.log("También vamos a ver las producciones de la categoria de fantasía");
    
    
    iterator = vs.getProductionsCategory(category);
    
    iterateSomething(iterator);
    
    console.log("Ahora vamos a comprobar los siguientes errores, intentar asignar cero producciones a un actor y eliminar un usuario que no esta añadido ");
    
    try {
        vs.assignActor(actor);
    } catch (error) {
        console.error(error);
    }
    try {
        vs.removeUser(new User("Antonio", "Antonio@gmail.com", "Ldiosaj"));
    } catch (error) {
        console.error(error);
    }
    
    console.log("Vamos a recoger la categoria por defecto");
    
    let defaultCategory = vs.getCategory("Default");
    console.log(defaultCategory);
    console.log("Vamos a ver que no tiene ninguna producción asociada iterandola");
    
    iterator = vs.getProductionsCategory(defaultCategory);
    
    iterateSomething(iterator);
    
    console.log("Ahora vamos a eliminar unas categorias y vamos a ver como sus producciones se añaden a la categoria por defecto");
    
    vs.removeCategory(category);
    vs.removeCategory(category2);
    
    iterator = vs.getProductionsCategory(defaultCategory);
    
    iterateSomething(iterator);
    
    console.log("Por último vamos a probar el getter y el setter del nombre del VideoSystem");
    
    console.log(vs.name);
    
    console.log("Le cambiamos el nombre");
    vs.name = "Nuevo Video System";
    console.log(vs.name);
}());
