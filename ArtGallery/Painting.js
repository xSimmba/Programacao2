import ArtPiece from "./ArtPiece.js";

export default class Painting extends ArtPiece{
    constructor(data, callback){
        super(data, callback)
        console.log("painting")
    }
}