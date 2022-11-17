import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  formulario!: FormGroup;
  perfil: Perfil;
  id:string = '';
  constructor(private usuarioService:UsuarioService, private formBuilder: FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.usuarioService.setId(parseInt(this.id))
        this.usuarioService.obtenerPerfil(parseInt(this.id)).subscribe({
          next: (resPerfil:Perfil) => {
            this.perfil = resPerfil;
            this.cargarDatos();
          }
        })
      }
    })

  }

  cargarDatos(): void {
    this.formulario = this.formBuilder.group({
      nombre: [this.perfil.nombre, [
        Validators.required
      ]],
      email: [this.perfil.email, [
        Validators.required
      ]],
      telefono: [this.perfil.telefono],
      direccion: [this.perfil.direccion, [
        Validators.required
      ]]
    })
  }

  enviar(): void {
    if(!this.formulario.valid) {
      return alert('Completar los campos correctamente')
    }

    this.perfil = this.formulario.value;
    this.perfil.id = this.id;
    this.usuarioService.editar(this.perfil).subscribe({
      next: (resPerfil:Perfil) => {
        alert('Usuario Actualizado correctamente')
        this.router.navigate(['']);
      },
      error: (error) => {
        alert('Error al actualizar usuario')
      }
    })
  }

  cancelar(): void {
    const resultado = confirm('Desea regresar a vista de perfil?');
    if(resultado) {
      this.router.navigate(['']);
    }
  }

}
