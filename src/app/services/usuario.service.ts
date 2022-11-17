import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly URL: string = 'https://6317ca93f6b281877c5d7785.mockapi.io/usuario/';
  id: number = 0;

  constructor(private http: HttpClient) { }

  setId(id:number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
 
  obtenerPerfil(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(this.URL + id)
  }

  editar(perfil:Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.URL}/${perfil.id}`, perfil);
  }
}
