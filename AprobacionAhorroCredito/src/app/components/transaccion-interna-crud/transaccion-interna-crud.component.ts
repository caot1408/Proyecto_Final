import { Component, OnInit } from '@angular/core';
import { TransaccionInternaService } from 'src/app/services/transaccion-interna.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TransaccionInterna } from 'src/app/models/transaccion-interna';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-transaccion-interna-crud',
  templateUrl: './transaccion-interna-crud.component.html',
})
export class TransaccionInternaCrudComponent implements OnInit {
  transacciones: TransaccionInterna[] = [];
  transaccion: TransaccionInterna = new TransaccionInterna();
  usuarios: Usuario[] = [];
  editMode: boolean = false;

  constructor(
    private transaccionInternaService: TransaccionInternaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listarTransacciones();
    this.listarUsuarios(); // Cargar los usuarios al iniciar el componente
    this.resetForm(); // Inicializa la transacción
  }

  listarTransacciones(): void {
    this.transaccionInternaService.listarTransacciones().subscribe((data) => {
      this.transacciones = data;
    });
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  guardarTransaccion(): void {
    if (this.editMode) {
      this.transaccionInternaService.crearTransaccion(this.transaccion).subscribe(() => {
        this.resetForm();
        this.listarTransacciones();
      });
    } else {
      this.transaccionInternaService.crearTransaccion(this.transaccion).subscribe(() => {
        this.resetForm();
        this.listarTransacciones();
      });
    }
  }

  eliminarTransaccion(id: number): void {
    this.transaccionInternaService.eliminarTransaccion(id).subscribe(() => {
      this.transacciones = this.transacciones.filter((transaccion) => transaccion.idTransaccion !== id);
    });
  }

  cargarTransaccion(transaccion: TransaccionInterna): void {
    this.transaccion = { ...transaccion };
    this.editMode = true;
  }

  resetForm(): void {
    this.transaccion = {
      idTransaccion: 0,
      usuario: { idUsuario: 0, nombre: '' }, // Inicializa usuario
      tipoTransaccion: '',
      monto: 0,
      fechaTransaccion: ''
    };
    this.editMode = false;
  }
}
