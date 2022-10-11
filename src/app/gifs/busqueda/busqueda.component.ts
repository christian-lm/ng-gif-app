import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // -- Buscar el elemento HTML con la referencia. Tambien sirve con elementos HTML (input, h3...) --
  // -- El '!' explica que nunca va a ser nulo este campo --
  // -- El HTMLInputElement es para decirle al ElementRef que es un Input --
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  /**
   * Método buscar GIFS
   */
  buscar() {
    const value = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
