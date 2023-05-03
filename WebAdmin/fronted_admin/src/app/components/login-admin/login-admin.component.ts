import { Component,OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators}from '@angular/forms';





@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit{
  user_form: FormGroup;


  constructor(private fb: FormBuilder, ){
    this.user_form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
      
    })
   }
   ngOnInit():void{

   }
   validar_usuario(){
     console.log(this.user_form)
 
  
  
}

}
