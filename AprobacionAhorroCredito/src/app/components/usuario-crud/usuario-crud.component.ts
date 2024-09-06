import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
})
export class UsuarioCrudComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuario: Usuario = new Usuario();
  editMode: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  // Listar todos los usuarios
  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  // Crear o actualizar usuario
  guardarUsuario(): void {
    if (this.editMode) {
      // Actualizar usuario existente
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.resetForm();
        this.listarUsuarios();
      });
    } else {
      // Crear nuevo usuario
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.resetForm();
        this.listarUsuarios();
      });
    }
  }

  // Eliminar usuario
  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter((usuario) => usuario.idUsuario !== id);
    });
  }

  // Cargar datos de usuario para edición
  cargarUsuario(usuario: Usuario): void {
    this.usuario = { ...usuario };
    this.editMode = true;
  }

  // Reiniciar formulario
  resetForm(): void {
    this.usuario = new Usuario();
    this.editMode = false;
  }
}
