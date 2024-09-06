import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogActividad } from '../models/log-actividad';

@Injectable({
  providedIn: 'root',
})
export class LogActividadService {
  private apiUrl = 'http://localhost:8080/api/logs'; // URL directa del backend

  constructor(private http: HttpClient) {}

  listarLogs(): Observable<LogActividad[]> {
    return this.http.get<LogActividad[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerLogPorId(id: number): Observable<LogActividad> {
    return this.http.get<LogActividad>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearLog(logActividad: LogActividad): Observable<LogActividad> {
    return this.http.post<LogActividad>(this.apiUrl, logActividad, { withCredentials: true });
  }

  eliminarLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }
}
