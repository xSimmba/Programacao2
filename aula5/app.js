


import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const data = {

    cars: [
        {
            brand: 'ferrari',
            speed: 200,
        },
        {
            brand: 'fiat',
            speed: 50,
        }
    ],

    motorcycles: [
        {
            brand: 'ducatti',
            speed: 400,
        },
        {
            brand: 'Yamaha',
            speed: 500,
        },
    ],
}

const vehicles = [];

window.onload = () => {
    console.log("window loaded");
    const nav = document.querySelector("nav");
    
    const createUL = (name, data) => {
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);
        

        data.forEach ((element, index) => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.onclick = (event) => {

                switch (name) {
                    case "cars":
                        vehicles.push (new Car(element));
                        break;
                    case "motorcycles":
                        vehicles.push (new Motorcycle(element));

                    break;
                
                    default:
                        break;
                }

                console.log(vehicles);
            }
            console.log(element);
            button.innerText = element.brand;
            li.appendChild(button);
            ul.appendChild(li);
        })

        nav.appendChild(ul);
    };
    
    for (const key in data) {
        createUL(key, data[key]);

    }
}
//    createUL();



//const car = new Car();
//const motorcycle = new Motorcycle();








