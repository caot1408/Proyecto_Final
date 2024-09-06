import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // URL directa al backend REST
  private graphqlUrl = 'http://localhost:8080/graphql'; // URL directa al backend GraphQL

  constructor(private http: HttpClient) {}

  // Métodos REST
  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario, { withCredentials: true });
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  // Métodos GraphQL

  // Consultar usuario por ID (GraphQL)
  obtenerUsuarioPorIdGraphQL(id: number): Observable<any> {
    const query = {
      query: `
        query {
          obtenerUsuarioPorId(id: ${id}) {
            id
            nombre
            correoElectronico
            numeroIdentificacion
            ingresosMensuales
            direccion
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, query);
  }

  // Listar todos los usuarios (GraphQL)
  listarUsuariosGraphQL(): Observable<any> {
    const query = {
      query: `
        query {
          listarUsuarios {
            id
            nombre
            correoElectronico
            numeroIdentificacion
            ingresosMensuales
            direccion
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, query);
  }

  // Crear usuario (GraphQL)
  crearUsuarioGraphQL(usuario: Usuario): Observable<any> {
    const mutation = {
      query: `
        mutation {
          crearUsuario(
            nombre: "${usuario.nombre}",
            correoElectronico: "${usuario.correoElectronico}",
            numeroIdentificacion: "${usuario.numeroIdentificacion}",
            ingresosMensuales: ${usuario.ingresosMensuales},
            direccion: "${usuario.direccion}"
          ) {
            id
            nombre
            correoElectronico
            numeroIdentificacion
            ingresosMensuales
            direccion
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, mutation);
  }


}
