
export class TransaccionInterna {
  idTransaccion!: number;
  usuario!: {
    idUsuario: number;
    nombre: string;
  };
  tipoTransaccion!: string;
  monto!: number;
  fechaTransaccion!: string; // Usamos string para facilitar la conversión de LocalDateTime
}
