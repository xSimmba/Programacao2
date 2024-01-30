export default class Animal {

    #name;

    constructor(name, image) {
        this.#name = name;
        
        const img = document.createElement("img");
        img.src = image;

        document.body.appendChild(img);

    }

    introduce() {
        return " hello, I'm a "+ this.#name;
    }

    get name () {
        return this.#name;
    }
}