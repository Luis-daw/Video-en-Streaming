class VideoSystem{
    #name;
    #systemUsers = [];
    #productions = [];
    #categories = [];
    #actors = [];
    #directors = [];

    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
    get categories(){

    }
    get users(){
       
    }

    addUser = function(user){
        if (!(user instanceof User));
        this.#systemUsers.push(user);
    }
    removeUser = function(user){
        if (!(user instanceof User));
        this.#systemUsers.splice(this.#systemUsers.indexOf(user),1);
    }
}