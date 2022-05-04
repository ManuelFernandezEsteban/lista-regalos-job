import { Tag } from "./tag.models";


export class Grupo{
    constructor(
        public titulo:string,
        public descripcion:string,        
        public tags:Tag[],
    ){}
}