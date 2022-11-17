import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-perfil',
  templateUrl: './listado-perfil.component.html',
  styleUrls: ['./listado-perfil.component.css']
})
export class ListadoPerfilComponent implements OnInit {

  @Input() id: string = '';
  actividades: string[];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.obtenerPerfil(parseInt(this.id)).subscribe({
      next: (resPerfil:Perfil) => {
        this.actividades = resPerfil.actividades;
      }
    })
  }

}
