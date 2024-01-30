export default class Animal {

    #name;
    #callback

    constructor(name, image, callback) {
        this.#name = name;
        this.#callback = callback;

        const img = document.createElement("img");
        img.src = image;
        img.onclick = () => this.#callback();
        document.body.appendChild(img);

    }

    introduce() {
        return " hello, I'm a "+ this.#name;
    }

    get name () {
        return this.#name;
    }
}