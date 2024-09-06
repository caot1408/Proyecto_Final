import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/services/documento.service';
import { SolicitudCreditoService } from 'src/app/services/solicitud-credito.service';
import { Documento } from 'src/app/models/documento';
import { SolicitudCredito } from 'src/app/models/solicitud-credito';

@Component({
  selector: 'app-documento-crud',
  templateUrl: './documento-crud.component.html',
})
export class DocumentoCrudComponent implements OnInit {
  documentos: Documento[] = [];
  documento: Documento = new Documento();
  solicitudes: SolicitudCredito[] = [];
  editMode: boolean = false;

  constructor(
    private documentoService: DocumentoService,
    private solicitudCreditoService: SolicitudCreditoService
  ) {}

  ngOnInit(): void {
    this.listarDocumentos();
    this.listarSolicitudes(); // Cargar las solicitudes al iniciar el componente
    this.resetForm(); // Inicializa el documento
  }

  listarDocumentos(): void {
    this.documentoService.listarDocumentos().subscribe((data) => {
      this.documentos = data;
    });
  }

  listarSolicitudes(): void {
    this.solicitudCreditoService.listarSolicitudes().subscribe((data) => {
      this.solicitudes = data;
    });
  }

  guardarDocumento(): void {
    if (this.editMode) {
      this.documentoService.crearDocumento(this.documento).subscribe(() => {
        this.resetForm();
        this.listarDocumentos();
      });
    } else {
      this.documentoService.crearDocumento(this.documento).subscribe(() => {
        this.resetForm();
        this.listarDocumentos();
      });
    }
  }

  eliminarDocumento(id: number): void {
    this.documentoService.eliminarDocumento(id).subscribe(() => {
      this.documentos = this.documentos.filter((documento) => documento.idDocumento !== id);
    });
  }

  cargarDocumento(documento: Documento): void {
    this.documento = { ...documento };
    this.editMode = true;
  }

  resetForm(): void {
    this.documento = {
      idDocumento: 0,
      tipoDocumento: '',
      urlDocumento: '',
      solicitudCredito: { idSolicitud: 0, montoSolicitado: 0 },
    };
    this.editMode = false;
  }
}
