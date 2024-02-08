import Gallery from "./Gallery.js";

window.onload = async () => {

    

    const request = await fetch("data.json");
    const result = await request.json();
    
    const gallery = new Gallery()

    result.forEach(element => {
       gallery.addArtPiece(element);
    });




  
}