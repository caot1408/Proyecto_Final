import { Component, OnInit } from '@angular/core';
import { LogActividadService } from 'src/app/services/log-actividad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AnalistaCreditoService } from 'src/app/services/analista-credito.service';
import { LogActividad } from 'src/app/models/log-actividad';
import { Usuario } from 'src/app/models/usuario';
import { AnalistaCredito } from 'src/app/models/analista-credito';

@Component({
  selector: 'app-log-actividad-crud',
  templateUrl: './log-actividad-crud.component.html',
})
export class LogActividadCrudComponent implements OnInit {
  logs: LogActividad[] = [];
  log: LogActividad = new LogActividad();
  usuarios: Usuario[] = [];
  analistas: AnalistaCredito[] = [];
  editMode: boolean = false;

  constructor(
    private logActividadService: LogActividadService,
    private usuarioService: UsuarioService,
    private analistaCreditoService: AnalistaCreditoService
  ) {}

  ngOnInit(): void {
    this.listarLogs();
    this.listarUsuarios();
    this.listarAnalistas();
    this.resetForm();
  }

  listarLogs(): void {
    this.logActividadService.listarLogs().subscribe((data) => {
      this.logs = data;
    });
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  listarAnalistas(): void {
    this.analistaCreditoService.listarAnalistas().subscribe((data) => {
      this.analistas = data;
    });
  }

  guardarLog(): void {
    if (this.editMode) {
      this.logActividadService.crearLog(this.log).subscribe(() => {
        this.resetForm();
        this.listarLogs();
      });
    } else {
      this.logActividadService.crearLog(this.log).subscribe(() => {
        this.resetForm();
        this.listarLogs();
      });
    }
  }

  eliminarLog(id: number): void {
    this.logActividadService.eliminarLog(id).subscribe(() => {
      this.logs = this.logs.filter((log) => log.idLog !== id);
    });
  }

  cargarLog(log: LogActividad): void {
    this.log = { ...log };
    this.editMode = true;
  }

  resetForm(): void {
    this.log = {
      idLog: 0,
      fechaActividad: '',
      tipoActividad: '',
      usuario: { idUsuario: 0, nombre: '' },
      analista: { idAnalista: 0, nombre: '' },
      descripcion: '',
    };
    this.editMode = false;
  }
}
