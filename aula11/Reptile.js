import Animal from "./Animal.js";

export default class Reptile extends Animal {

    #isAgressive

    constructor({name, isAgressive, image}){
        super(name);
        this.#isAgressive = isAgressive;
    }
    bite()  {
        return this.#isAgressive ?
        this.introduce() + " and im agressive" :
        this.introduce() + " and im passive";
    }
}