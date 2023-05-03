import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirCategoriaComponent } from './components/elegir-categoria/elegir-categoria.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const routes: Routes = [

{path:'',component:LoginAdminComponent},
{path:'elegir-categoria',component:ElegirCategoriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
