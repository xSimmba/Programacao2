import ArtPiece from "./ArtPiece.js";

export default class Sculpture extends ArtPiece{
    constructor(data, callback){
        super(data, callback)
        console.log("sculpture")
    }
}