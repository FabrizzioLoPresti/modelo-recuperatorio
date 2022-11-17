import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './usuarios/editar-perfil/editar-perfil.component';
import { VistaPerfilComponent } from './usuarios/vista-perfil/vista-perfil.component';

const routes: Routes = [
  { path: 'perfil/ver', component: VistaPerfilComponent },
  { path: '', redirectTo: 'perfil/ver', pathMatch: 'full' },
  {path: 'perfil/editar/:id', component: EditarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
