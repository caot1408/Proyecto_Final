
export class Documento {
  idDocumento!: number;
  tipoDocumento!: string;
  urlDocumento!: string;
  solicitudCredito!: {
    idSolicitud: number;
    montoSolicitado: number;
  };
}
