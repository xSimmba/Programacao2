import ArtPiece from "./ArtPiece.js";

export default class Photo extends ArtPiece{
    constructor(data){
        super(data)
        console.log("photo")
    }
}