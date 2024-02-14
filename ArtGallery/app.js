import Gallery from "./Gallery.js";

window.onload = async () => {

    
    const button = document.createElement("button");
    button.className = "buttonGal";
    button.innerText = "View Gallery";
    document.body.appendChild(button);
    const p = document.createElement("p");
    p.className = "GalDescription";
    p.innerText = "This is a simple and easy navigation Gallery, made by Luka Charnock.";
    document.body.appendChild(p);

   

    
    
    
    button.onclick = async ()=> {
        const request = await fetch("data.json");
        const result = await request.json();
        
        const gallery = new Gallery((item) =>{console.log(item)});
    
        result.forEach(element => {
            gallery.addArtPiece(element);
        });
       
        switch (button.innerText) {
            case "View Gallery":
                button.className = "GoBack"
                button.innerText = "Close Gallery";
                p.innerText = "";
                break;
            case "Close Gallery":
                const body = document.querySelector("body");
                body.innerHTML = "";
                button.className = "buttonGal";
                button.innerText = "View Gallery";
                document.body.appendChild(button);
                p.className = "GalDescription";
                p.innerText = "This is a simple and easy navigation Gallery, made by Luka Charnock.";
                document.body.appendChild(p);
                break;

        };  
    };
    
    
    
 
        


    }

    
    
    
    
    
    



    

    

    


  
