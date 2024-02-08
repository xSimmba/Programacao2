export default class ArtPiece {
    constructor(data){



        const div = document.createElement("div");
        div.className = "image-container";
        const image = document.createElement("img");
        image.src = data.image;
        div.appendChild(image);
        document.body.appendChild(div);

       
        const h1 = document.createElement("h1");
        h1.className = "Name-container";
        h1.innerText = data.title + " by " + data.artist;
        div.appendChild(h1);
        

        
        const p = document.createElement("p");
        p.className = "p-container";
        p.innerText = " Medium: " + data.medium;
        div.appendChild(p);
        
        

        

        

        
    }

}