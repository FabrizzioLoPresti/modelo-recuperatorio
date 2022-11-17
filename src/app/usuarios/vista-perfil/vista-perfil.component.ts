import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {
  perfil: Perfil;

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    let id = this.usuarioService.getId();
    
    if(id === 0) {
      id = Math.round(Math.random() * (15 - 1) + 1);
    }

    this.usuarioService.obtenerPerfil(id).subscribe({
      next: (respuesta: Perfil) => {
        this.perfil = respuesta;
      },
      error: () => {
        alert('Error al obtener el perfil');
      }
    })
  }

  editar(id:string): void {
    this.router.navigate([`perfil/editar/${id}`])
  }

}
