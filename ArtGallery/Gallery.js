import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery {

    artPieces = [];
    callback;

    constructor(callback){
        this.callback=callback;
    }

    addArtPiece(data){
        switch (data.type) {
            case "Painting":
                this.artPieces.push(new Painting(data,()=>{this.callback(data)}))
                break;
            case "Sculpture":
                this.artPieces.push(new Sculpture(data,()=>{this.callback(data)}))
            break;
            case "Photo":
                this.artPieces.push(new Photo(data,()=>{this.callback(data)}))
            break;
        
            default:
                break;
        }
    }
    rmvArtPiece(data){
        switch (data.type) {
            case "Painting":
                this.artPieces.remove(new Painting(data))
                break;
            case "Sculpture":
                this.artPieces.remove(new Sculpture(data))
            break;
            case "Photo":
                this.artPieces.remove(new Photo(data))
            break;
        
            default:
                break;
        }
    }
}