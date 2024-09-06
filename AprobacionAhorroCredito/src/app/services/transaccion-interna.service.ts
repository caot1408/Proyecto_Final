import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransaccionInterna } from '../models/transaccion-interna';

@Injectable({
  providedIn: 'root',
})
export class TransaccionInternaService {
  private apiUrl = 'http://localhost:8080/api/transacciones'; // URL directa del backend

  constructor(private http: HttpClient) {}

  listarTransacciones(): Observable<TransaccionInterna[]> {
    return this.http.get<TransaccionInterna[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerTransaccionPorId(id: number): Observable<TransaccionInterna> {
    return this.http.get<TransaccionInterna>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearTransaccion(transaccion: TransaccionInterna): Observable<TransaccionInterna> {
    return this.http.post<TransaccionInterna>(this.apiUrl, transaccion, { withCredentials: true });
  }

  eliminarTransaccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }
}
