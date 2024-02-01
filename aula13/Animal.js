export default class Animal {

    #name;
    #callback;
    #imageElem;
    #data;
    constructor(data, callback) {
        this.#data = data;
        this.#name = this.#data.name;
        this.#callback = callback;

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = this.#data.image;
        this.#imageElem.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
        container.appendChild(this.#imageElem);
    }

    introduce() {
        return "Hello, I'm a " + this.#data.name;
    }

    get type(){
        return this.#data.type;
    }
    get image(){
        return this.#data.image;
    }

    get name() {
        return this.#data.name;;
    }
    set name(value) {
        this.#data.name = value;
    }

    get sound(){
        return this.#data.sound;
    }
    set sound(value){
        this.#data.sound = value;
    }

    get active() {
        return this.#imageElem.className.length !== 0;
    }
    set active(value) {
        this.#imageElem.className = value ? 'active' : '';
    }
}