import Animal from "./Animal.js";

export default class Bird extends Animal {

    #canFly;

    constructor({name, canFly, image}){
        super(name, image);

        this.#canFly = canFly;
    }
    fly(){

        return this.#canFly ?
        this.introduce() + "and I can fly":
        this.introduce() + "and I can NOT fly";
    }
}