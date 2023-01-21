"use strict";
import {Person, Category, Resource, Movie, Serie, User, Coordinate} from "./clases.js";
import VideoSystem from "./system.js";
import videoSystem from "./system.js";
let category = new Category("cat", "descript");
let category2 = new Category("cat2", "descript");
let category3 = new Category("cat3", "descript");

let arr = [];
let arr2 = [];
arr.push(category);

let obj = {
    category: category,
    productions: []
}
let obj2 = {
    category: category2,
    productions: []
}
let obj3 = {
    category: category3,
    productions: []
}

arr2.push(obj);
arr2.push(obj2);
arr2.push(obj3);
console.log()
console.log(obj.category.toString());
console.log(obj.productions);

console.log(arr.indexOf(category));
console.log(arr2.indexOf(category));
console.log(arr2.findIndex(function(elem){
    return elem.category == category3; 
}));
console.log(arr2.findIndex((elem) => elem.category == category2));


let vs=VideoSystem.getInstance();
let vs2 = VideoSystem.getInstance();

console.log(vs === vs2);
console.log(vs === vs2);
console.log(vs === vs2);

vs.addCategory(category3);
vs.addCategory(category2);
vs.addCategory(category);
// try {
//     vs.addCategory(category);
// } catch (error) {
//     console.error(error);
// }
let production = new Movie("Hola");
let production2 = new Movie("hola");
let production3 = new Movie("holi");
let production4 = new Serie("Hola");
// vs.addProduction(production);
// vs.addProduction(production);
vs.assignCategory(category,production, production2);
//vs.deassignCategory(category, production, production2);
// vs.assignCategory(category, production, production2, production);

let arr3 = [];

let iterator = vs.categories;
let iterator2 = vs.getProductionsCategory(category);

//let iterable = iterator.iterator();
for (const category of iterator) {
    console.log(category);
}
for (const category of iterator2) {
    console.log(category);
}



obj.productions.push(production);
obj.productions.push(production2);
obj3.productions.push(production2);

let filt = arr2.filter((elem) => elem.productions.findIndex((produc)=>produc.title == production2.title) != -1);

console.log(filt);