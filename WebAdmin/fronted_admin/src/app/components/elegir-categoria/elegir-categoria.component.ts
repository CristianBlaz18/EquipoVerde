import { Component,OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators}from '@angular/forms';

@Component({
  selector: 'app-elegir-categoria',
  templateUrl: './elegir-categoria.component.html',
  styleUrls: ['./elegir-categoria.component.css']
})
export class ElegirCategoriaComponent implements OnInit{
  categoria_form: FormGroup;
  

  constructor(private fb: FormBuilder, ){
    this.categoria_form=this.fb.group({
      nombre_categ:['',Validators.required],
      imagen_categ:['',Validators.required],
      descripcion_cat:['',Validators.required],
      ciclo_incio:['',Validators.required],
      ciclo_fin:['',Validators.required],
      
    })
   }
   ngOnInit():void{
   }
   registrar_categoria(){
     console.log(this.categoria_form)  
 }
}
