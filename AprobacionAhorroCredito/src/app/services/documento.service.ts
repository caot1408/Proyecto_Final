import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root',
})
export class DocumentoService {
  private apiUrl = 'http://localhost:8080/api/documentos'; // URL directa del backend

  constructor(private http: HttpClient) {}

  listarDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.apiUrl, { withCredentials: true });
  }

  obtenerDocumentoPorId(id: number): Observable<Documento> {
    return this.http.get<Documento>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  crearDocumento(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(this.apiUrl, documento, { withCredentials: true });
  }

  eliminarDocumento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }
}
