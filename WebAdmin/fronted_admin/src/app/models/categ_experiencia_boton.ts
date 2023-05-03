export class categ_experiencia_boton{
    _id?: number;
    nombre_categ:string;
    imagen_categ:string;
    descripcion_cat:String;
    ciclo_incio: number;
    ciclo_fin: number;
    
    constructor (nombre_categ:string,imagen_categ:string,descripcion_cat:String, ciclo_incio: number,ciclo_fin: number){
        this.nombre_categ = nombre_categ;
        this.imagen_categ =imagen_categ;
        this.descripcion_cat =descripcion_cat;
        this.ciclo_incio = ciclo_incio;
        this.ciclo_fin = ciclo_fin;
    }

}