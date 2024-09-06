import { Component, OnInit } from '@angular/core';
import { HistorialCrediticioService } from 'src/app/services/historial-crediticio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HistorialCrediticio } from 'src/app/models/historial-crediticio';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-historial-crediticio-crud',
  templateUrl: './historial-crediticio-crud.component.html',
})
export class HistorialCrediticioCrudComponent implements OnInit {
  historiales: HistorialCrediticio[] = [];
  historial: HistorialCrediticio = new HistorialCrediticio();
  usuarios: Usuario[] = [];
  editMode: boolean = false;

  constructor(
    private historialCrediticioService: HistorialCrediticioService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listarHistoriales();
    this.listarUsuarios(); // Cargar los usuarios al iniciar el componente
    this.resetForm(); // Asegúrate de inicializar el historial correctamente
  }

  listarHistoriales(): void {
    this.historialCrediticioService.listarHistoriales().subscribe((data) => {
      this.historiales = data;
    });
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  guardarHistorial(): void {
    if (this.editMode) {
      this.historialCrediticioService.crearHistorial(this.historial).subscribe(() => {
        this.resetForm();
        this.listarHistoriales();
      });
    } else {
      this.historialCrediticioService.crearHistorial(this.historial).subscribe(() => {
        this.resetForm();
        this.listarHistoriales();
      });
    }
  }

  eliminarHistorial(id: number): void {
    this.historialCrediticioService.eliminarHistorial(id).subscribe(() => {
      this.historiales = this.historiales.filter((historial) => historial.idHistorial !== id);
    });
  }

  cargarHistorial(historial: HistorialCrediticio): void {
    this.historial = { ...historial };
    this.editMode = true;
  }

  resetForm(): void {
    this.historial = {
      idHistorial: 0,
      usuario: { idUsuario: 0, nombre: '' },  // Inicializa el campo usuario
      puntajeBuro: 0,
      deudasActuales: 0,
      historialPagos: ''
    };
    this.editMode = false;
  }
}
