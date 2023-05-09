import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ElegirCategoriaComponent } from './components/elegir-categoria/elegir-categoria.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';

@NgModule({
 
  declarations: [
    AppComponent,
    ElegirCategoriaComponent,
    LoginAdminComponent,
    AgregarCategoriaComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
