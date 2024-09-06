import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialCrediticio } from '../models/historial-crediticio';

@Injectable({
  providedIn: 'root',
})
export class HistorialCrediticioService {
  private apiUrl = 'http://localhost:8080/api/historiales'; // URL directa para REST

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  listarHistoriales(): Observable<HistorialCrediticio[]> {
    return this.http.get<HistorialCrediticio[]>(this.apiUrl, {
      headers: this.getHeaders(),
      withCredentials: true,  // Enviamos las credenciales
    });
  }

  obtenerHistorialPorId(id: number): Observable<HistorialCrediticio> {
    return this.http.get<HistorialCrediticio>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
      withCredentials: true,  // Enviamos las credenciales
    });
  }

  crearHistorial(historial: HistorialCrediticio): Observable<HistorialCrediticio> {
    return this.http.post<HistorialCrediticio>(this.apiUrl, historial, {
      headers: this.getHeaders(),
      withCredentials: true,  // Enviamos las credenciales
    });
  }

  eliminarHistorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
      withCredentials: true,  // Enviamos las credenciales
    });
  }
}
