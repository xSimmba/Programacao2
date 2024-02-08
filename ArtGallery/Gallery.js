import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery {

    artPieces = [];

    constructor(){}

    addArtPiece(data){
        switch (data.type) {
            case "Painting":
                this.artPieces.push(new Painting(data))
                break;
            case "Sculpture":
                this.artPieces.push(new Sculpture(data))
            break;
            case "Photo":
                this.artPieces.push(new Photo(data))
            break;
        
            default:
                break;
        }
    }
}