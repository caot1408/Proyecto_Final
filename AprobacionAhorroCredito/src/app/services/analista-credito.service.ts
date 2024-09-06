import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalistaCredito } from '../models/analista-credito';

@Injectable({
  providedIn: 'root',
})
export class AnalistaCreditoService {
  private apiUrl = 'http://localhost:8080/api/analistas'; // URL directa del backend

  constructor(private http: HttpClient) {}

  listarAnalistas(): Observable<AnalistaCredito[]> {
    return this.http.get<AnalistaCredito[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerAnalistaPorId(id: number): Observable<AnalistaCredito> {
    return this.http.get<AnalistaCredito>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearAnalista(analista: AnalistaCredito): Observable<AnalistaCredito> {
    return this.http.post<AnalistaCredito>(this.apiUrl, analista, { withCredentials: true });
  }

  eliminarAnalista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }
}
