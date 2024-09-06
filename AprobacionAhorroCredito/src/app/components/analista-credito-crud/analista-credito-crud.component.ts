import { Component, OnInit } from '@angular/core';
import { AnalistaCreditoService } from 'src/app/services/analista-credito.service';
import { AnalistaCredito } from 'src/app/models/analista-credito';

@Component({
  selector: 'app-analista-credito-crud',
  templateUrl: './analista-credito-crud.component.html',
})
export class AnalistaCreditoCrudComponent implements OnInit {
  analistas: AnalistaCredito[] = [];
  analista: AnalistaCredito = new AnalistaCredito();
  editMode: boolean = false;

  constructor(private analistaCreditoService: AnalistaCreditoService) {}

  ngOnInit(): void {
    this.listarAnalistas();
    this.resetForm(); // Inicializa el analista
  }

  listarAnalistas(): void {
    this.analistaCreditoService.listarAnalistas().subscribe((data) => {
      this.analistas = data;
    });
  }

  guardarAnalista(): void {
    if (this.editMode) {
      this.analistaCreditoService.crearAnalista(this.analista).subscribe(() => {
        this.resetForm();
        this.listarAnalistas();
      });
    } else {
      this.analistaCreditoService.crearAnalista(this.analista).subscribe(() => {
        this.resetForm();
        this.listarAnalistas();
      });
    }
  }

  eliminarAnalista(id: number): void {
    this.analistaCreditoService.eliminarAnalista(id).subscribe(() => {
      this.analistas = this.analistas.filter((analista) => analista.idAnalista !== id);
    });
  }

  cargarAnalista(analista: AnalistaCredito): void {
    this.analista = { ...analista };
    this.editMode = true;
  }

  resetForm(): void {
    this.analista = {
      idAnalista: 0,
      nombre: '',
      correoElectronico: '',
      password: '',
      role: '',
    };
    this.editMode = false;
  }
}
