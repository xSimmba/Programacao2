import Animal from "./Animal.js";

export default class Bird extends Animal {

    #canFly;

    constructor({name, canFly, image}, callback){
        super(name, image, callback);

        this.#canFly = canFly;
    }
    fly(){

        return this.#canFly ?
        this.introduce() + "and I can fly":
        this.introduce() + "and I can NOT fly";
    }
}