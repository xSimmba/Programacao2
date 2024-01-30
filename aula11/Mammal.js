import Animal from "./Animal.js";

export default class Mammal extends Animal {

    #numLegs;

    constructor({name, numLegs, image}){
        super(name);

        this.#numLegs = numLegs;
    }

    walk() {
        return this.introduce() + "walking on " + this.#numLegs + " legs";
        }
}