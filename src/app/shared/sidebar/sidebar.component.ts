import {Component} from '@angular/core';
import {GifService} from "../../gifs/services/gif.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifService: GifService) {
  }

  // Se obtiene el historial del servicio
  get historial() {
    return this.gifService.historial;
  }

  /**
   * Metodo encargado de buscar los GIF desde el sidebar
   * @param busqueda query
   */
  buscar(busqueda: string) {

    // Se llama al servicio de busqueda
    this.gifService.buscarGIFs(busqueda);

  }
}
