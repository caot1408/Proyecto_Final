import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  correoElectronico: string = '';  // Declarar la propiedad correoElectronico
  password: string = '';  // Declarar la propiedad password

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.correoElectronico && this.password) {
      // Simula el login y guarda el correo del usuario en el localStorage
      localStorage.setItem('usuarioLogueado', this.correoElectronico);
  
      this.authService.login();  // Método que navega a la siguiente página
    } else {
      console.log('Por favor, completa ambos campos.');
    }
  }
  
}
