export default class ArtPiece {
    constructor(data){


      

        const div = document.createElement("div");
        div.className = "image-container";

        const image = document.createElement("img");
        image.src = data.image;
        div.appendChild(image);
        const infoContainer = document.createElement("div")
        div.appendChild(infoContainer)
    

        document.body.appendChild(div);



       
        div.onclick = () => {

            const h1 = document.createElement("h1");
            h1.className = "Name-container";
            h1.innerText = data.title + " by " + data.artist;
            infoContainer.appendChild(h1);
            
            const p = document.createElement("p");
            p.className = "p-container";
            p.innerText = " Medium: " + data.medium;
            infoContainer.appendChild(p);
            
            }
        
   
        

        

        
    }
}
