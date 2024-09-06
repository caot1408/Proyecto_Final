import { Component, OnInit } from '@angular/core';
import { SolicitudCreditoService } from 'src/app/services/solicitud-credito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SolicitudCredito } from 'src/app/models/solicitud-credito';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-solicitud-credito-crud',
  templateUrl: './solicitud-credito-crud.component.html',
})
export class SolicitudCreditoCrudComponent implements OnInit {
  solicitudes: SolicitudCredito[] = [];
  solicitud: SolicitudCredito = new SolicitudCredito(); // Iniciar con un objeto inicializado
  usuarios: Usuario[] = [];
  editMode: boolean = false;

  constructor(private solicitudCreditoService: SolicitudCreditoService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarSolicitudes();
    this.listarUsuarios(); // Cargar los usuarios al iniciar el componente
    this.resetForm(); // Asegúrate de inicializar solicitud y usuario correctamente
  }

  listarSolicitudes(): void {
    this.solicitudCreditoService.listarSolicitudes().subscribe((data) => {
      this.solicitudes = data;
    });
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  guardarSolicitud(): void {
    if (this.editMode) {
      this.solicitudCreditoService.crearSolicitud(this.solicitud).subscribe(() => {
        this.resetForm();
        this.listarSolicitudes();
      });
    } else {
      this.solicitudCreditoService.crearSolicitud(this.solicitud).subscribe(() => {
        this.resetForm();
        this.listarSolicitudes();
      });
    }
  }

  eliminarSolicitud(id: number): void {
    this.solicitudCreditoService.eliminarSolicitud(id).subscribe(() => {
      this.solicitudes = this.solicitudes.filter((solicitud) => solicitud.idSolicitud !== id);
    });
  }

  cargarSolicitud(solicitud: SolicitudCredito): void {
    this.solicitud = { ...solicitud };
    this.editMode = true;
  }

  resetForm(): void {
    this.solicitud = {
      idSolicitud: 0,
      usuario: { idUsuario: 0, nombre: '' }, // Asegúrate de inicializar el usuario con idUsuario
      montoSolicitado: 0,
      fechaSolicitud: '',
      estado: '',
      puntajeCrediticio: 0
    };
    this.editMode = false;
  }

  aprobarSolicitud(id: number): void {
    this.solicitudCreditoService.aprobarSolicitud(id).subscribe(() => {
      this.listarSolicitudes();  // Refresca la lista de solicitudes
    });
  }

  desaprobarSolicitud(id: number): void {
    this.solicitudCreditoService.desaprobarSolicitud(id).subscribe(() => {
      this.listarSolicitudes();  // Refresca la lista de solicitudes
    });
  }
}
