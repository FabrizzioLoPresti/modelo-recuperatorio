import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPerfilComponent } from './usuarios/vista-perfil/vista-perfil.component';
import { EditarPerfilComponent } from './usuarios/editar-perfil/editar-perfil.component';
import { ListadoPerfilComponent } from './usuarios/listado-perfil/listado-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPerfilComponent,
    EditarPerfilComponent,
    ListadoPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
