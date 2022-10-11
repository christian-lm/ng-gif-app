import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // -- Buscar el elemento HTML con la referencia. Tambien sirve con elementos HTML (input, h3...) --
  // -- El '!' explica que nunca va a ser nulo este campo --
  // -- El HTMLInputElement es para decirle al ElementRef que es un Input --
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {
  }

  /**
   * Método buscar GIFS
   */
  buscar() {
    // Obtengo el valor
    const value = this.txtBuscar.nativeElement.value;

    // Se controla si viene un vacio
    if (value.trim().length === 0) {
      return;
    }

    // Se llama al servicio de busqueda
    this.gifService.buscarGIFs(value);

    // Se vacia el input
    this.txtBuscar.nativeElement.value = '';
  }
}
