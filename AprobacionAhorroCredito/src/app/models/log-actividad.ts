

export class LogActividad {
  idLog!: number;
  fechaActividad!: string;  // LocalDateTime se manejará como string
  tipoActividad!: string;
  usuario!: {
    idUsuario: number;
    nombre: string;
  };
  analista!: {
    idAnalista: number;
    nombre: string;
  };
  descripcion!: string;
}
