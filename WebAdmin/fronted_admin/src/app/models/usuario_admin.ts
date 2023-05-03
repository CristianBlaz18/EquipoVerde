export class usuario_admin{
    id?:number;
    usuario:string;
    password:string;

    constructor(usuario:string,password:string){
        this.usuario = usuario;
        this.password = password;
    }
}