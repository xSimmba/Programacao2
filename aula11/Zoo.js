import Bird from "./Bird.js";
import Mammal from "./Mammal.js";
import Reptile from "./Reptile.js";


export default class Zoo {
    #animals;
    constructor() {
        this.#animals = [];
    }

    addAnimal (animal) {
        switch (animal.type) {
            case "bird":
                this.#animals.push(new Bird(animal));
                break;
            case "mammal":
                this.#animals.push(new Mammal(animal));
                break;
            case "reptile":
                this.#animals.push(new Reptile(animal));
                break;
        
            default:
                break;
        }
    }

    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        });
    }

    getAnimal(name) {
        return this.#animals.find(animal => animal.name === name);
    }
}