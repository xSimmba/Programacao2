import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";


let currentVehicle;

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();
    return result;
}

const createLiContent = (item) => {
    const button = document.createElement("button");
    button.innerText = item.brand;

    button.addEventListener("click", () => {
        console.log("button clicked");
    })

    button.onclick = () => {


        if(playButton.className === "inactive")  {
            playButton.className = "";
        }

        if(currentVehicle) {
            currentVehicle.destroy();
        }

        switch (item.type) {
            case "car":
                currentVehicle = new Car(item);
                break;
            
            case "motorcycle":
                currentVehicle = new Motorcycle(item);
                break;
            case "boat":
                currentVehicle = new Boat(item);
                break;
           
        }
        
    }

    return button;
}

const createList = (data) => {

    const ul = document.querySelector("ul");

    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLiContent(item));
        ul.appendChild(li);
    
        
    });
}

let isPlaying = null;
let playButton;

const animate = () => {
    currentVehicle.animate();
    isPlaying = requestAnimationFrame(animate);
}

const playAnimation = () => {
    isPlaying = requestAnimationFrame(animate);
    console.log(isPlaying);
    playButton.innerText = "Stop";
    playButton.className = "red";
}

const StopAnimation = () => {
    cancelAnimationFrame(isPlaying);
    isPlaying = null;
    playButton.innerText = "Play";
    playButton.className = "green";
}

window.addEventListener("load", async () => {

    const data = await loadData("data.json");
    const sortedData = data.sort ((a, b) => a.type.localeCompare(b.type));
    

    const ul = createList(data);

    
    playButton = document.querySelector("#play_pause");
    playButton.onclick = () => {

        isPlaying ? StopAnimation() : playAnimation();
    }



})


//window.onload = async () => {

  //  const data = await loadData("data.json");
  //  const sortedData = data.sort ((a, b) => a.type.localeCompare(b.type));
    

   // const ul = createList(data);

 //   console.log("event Listner created");
//}