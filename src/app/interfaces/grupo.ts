import { Tag } from "./tag";

export interface grupo {
    titulo: string,
    descripcion: string,
    tags: Tag[],
    icono: string,
    iconoDescripcion: string,
    selected: boolean
}


