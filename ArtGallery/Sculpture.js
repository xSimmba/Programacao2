import ArtPiece from "./ArtPiece.js";

export default class Sculpture extends ArtPiece{
    constructor(data){
        super(data)
        console.log("sculpture")
    }
}