import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudCredito } from '../models/solicitud-credito';

@Injectable({
  providedIn: 'root',
})
export class SolicitudCreditoService {
  private apiUrl = 'http://localhost:8080/api/solicitudes'; // URL directa para REST
  private graphqlUrl = 'http://localhost:8080/graphql'; // URL para GraphQL

  constructor(private http: HttpClient) {}

  // Métodos REST
  listarSolicitudes(): Observable<SolicitudCredito[]> {
    return this.http.get<SolicitudCredito[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerSolicitudPorId(id: number): Observable<SolicitudCredito> {
    return this.http.get<SolicitudCredito>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearSolicitud(solicitud: SolicitudCredito): Observable<SolicitudCredito> {
    return this.http.post<SolicitudCredito>(this.apiUrl, solicitud, { withCredentials: true });
  }

  eliminarSolicitud(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  // Métodos GraphQL
  listarSolicitudesGraphQL(): Observable<any> {
    const query = {
      query: `
        query {
          listarSolicitudes {
            id
            usuario {
              id
              nombre
            }
            montoSolicitado
            fechaSolicitud
            estado
            puntajeCrediticio
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, query);
  }

  obtenerSolicitudPorIdGraphQL(id: number): Observable<any> {
    const query = {
      query: `
        query {
          obtenerSolicitudPorId(id: ${id}) {
            id
            usuario {
              id
              nombre
            }
            montoSolicitado
            fechaSolicitud
            estado
            puntajeCrediticio
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, query);
  }

  crearSolicitudGraphQL(usuarioId: number, montoSolicitado: number, fechaSolicitud: string, estado: string, puntajeCrediticio: number): Observable<any> {
    const mutation = {
      query: `
        mutation {
          crearSolicitud(
            usuarioId: ${usuarioId},
            montoSolicitado: ${montoSolicitado},
            fechaSolicitud: "${fechaSolicitud}",
            estado: "${estado}",
            puntajeCrediticio: ${puntajeCrediticio}
          ) {
            id
            usuario {
              id
              nombre
            }
            montoSolicitado
            fechaSolicitud
            estado
            puntajeCrediticio
          }
        }
      `,
    };
    return this.http.post<any>(this.graphqlUrl, mutation);
  }

    // Método para aprobar una solicitud
    aprobarSolicitud(id: number): Observable<SolicitudCredito> {
      return this.http.put<SolicitudCredito>(`${this.apiUrl}/${id}/aprobar`, {});
    }
  
    // Método para desaprobar una solicitud
    desaprobarSolicitud(id: number): Observable<SolicitudCredito> {
      return this.http.put<SolicitudCredito>(`${this.apiUrl}/${id}/desaprobar`, {});
    }
}
