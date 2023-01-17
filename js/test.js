"use strict";
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


let vs=new VideoSystem("Nombre");
vs.addCategory(category3);
// let a = vs.getCategory();
// console.log(a[0].category.toString());
let arr3 = [];
console.log(arr3.push(category));
console.log(arr3.push(category));
console.log(arr3.push(category));
console.log(arr3.push(category));
console.log(arr3.push(category));
console.log(arr3.push(category));
console.log(arr3.splice(0,2));
let pr = new Movie();