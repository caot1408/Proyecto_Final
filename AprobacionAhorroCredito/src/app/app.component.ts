import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprobacionAhorroCredito';
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
