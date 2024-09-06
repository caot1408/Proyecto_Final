import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private router: Router) { }

  login(): void {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticatedUser.next(true);  // Notificamos que el usuario está autenticado
    this.router.navigate(['/usuarios']);  // Redirige a cualquier ruta después del login
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedUser.next(false);  // Notificamos que el usuario cerró sesión
    this.router.navigate(['/login']);  // Redirige al login después de cerrar sesión
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isAuthenticated');
  }

  // Retorna un observable para estar al tanto de los cambios en la autenticación
  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedUser.asObservable();
  }
}
