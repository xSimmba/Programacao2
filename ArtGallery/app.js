import Gallery from "./Gallery.js";

window.onload = async () => {

    
    const button = document.createElement("button");
    button.className = "buttonGal";
    button.innerText = "View Gallery";
    document.body.appendChild(button);

    
    
    
    button.onclick = async ()=> {
        const request = await fetch("data.json");
        const result = await request.json();
        
        const gallery = new Gallery();
    
        result.forEach(element => {
            gallery.addArtPiece(element);
        });
       
        switch (button.innerText) {
            case "View Gallery":
                button.className = "GoBack"
                button.innerText = "Close Gallery";
                break;
            case "Close Gallery":
                const body = document.querySelector("body");
                body.innerHTML = "";
                button.className = "buttonGal";
                button.innerText = "View Gallery";
                document.body.appendChild(button);
                break;

        };  
    };
    
    
    
 
        


    }

    
    
    
    
    
    



    

    

    


  
