export class SolicitudCredito {
    idSolicitud!: number;
    usuario: { idUsuario: number; nombre: string } = { idUsuario: 0, nombre: '' }; // Inicializa el usuario correctamente
    montoSolicitado!: number;
    fechaSolicitud!: string;
    estado!: string;
    puntajeCrediticio!: number;
}
