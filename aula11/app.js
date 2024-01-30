

import Zoo from "./Zoo.js";



window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const zoo = new Zoo();
    result.forEach(item => {
        zoo.addAnimal(item);
    });
    
    const seagul = zoo.getAnimal("human");
    console.log(seagul)
    
}

