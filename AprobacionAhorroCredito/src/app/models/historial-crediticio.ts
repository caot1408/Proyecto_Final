
export class HistorialCrediticio {
  idHistorial!: number;
  usuario!: {
    idUsuario: number; // Cambiar a idUsuario para que coincida con el backend
    nombre: string;
  };
  puntajeBuro!: number; // Este es el puntajeBuro en lugar de "puntaje"
  deudasActuales!: number;
  historialPagos!: string;
}
