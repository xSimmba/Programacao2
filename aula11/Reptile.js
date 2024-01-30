import Animal from "./Animal.js";

export default class Reptile extends Animal {

    #isAgressive

    constructor({name, isAgressive, image}, callback){
        super(name, image, callback);
        this.#isAgressive = isAgressive;
    }
    bite()  {
        return this.#isAgressive ?
        this.introduce() + " and im agressive" :
        this.introduce() + " and im passive";
    }
}