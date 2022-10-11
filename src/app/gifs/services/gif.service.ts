import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root' // Le dice a Angular que este servicio va a ser único y global en toda la app
})
export class GifService {

  private _historial: string[] = [];

  /**
   * Metodo GET del historial
   */
  get historial() {
    return [...this._historial]; // Se rompe la referencia y devuelve un nuevo array, no el privado de este servicio
  }

  /**
   * Metodo encargado de añadir las busquedas al historial
   * @param query valorBuscado
   */
  buscarGIFs(query: string) {

    // Se quita los espacios y se trasforma a minuscula
    query = query.trim().toLowerCase();

    // Se comprueba si existe ya la busqueda
    if (!this._historial.includes(query)) {

      // Si no existe, se añade
      this._historial.unshift(query);

      // Se corta el array para que solo muestre 10
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }

}
