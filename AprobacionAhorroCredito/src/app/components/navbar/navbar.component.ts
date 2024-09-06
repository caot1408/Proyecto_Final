import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuarioLogueado: boolean = false;  // Controla si el usuario está logueado

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Nos suscribimos al estado de autenticación y actualizamos `usuarioLogueado`
    this.authService.getAuthStatus().subscribe((isAuthenticated) => {
      this.usuarioLogueado = isAuthenticated;
    });
  }

  onLogout(): void {
    this.authService.logout();  // El método logout también actualizará el estado
  }
}
