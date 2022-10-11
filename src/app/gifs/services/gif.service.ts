import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gif, SearchGIFResponse} from "../interfaces/gifs.interface";

@Injectable({
  providedIn: 'root' // Le dice a Angular que este servicio va a ser único y global en toda la app
})
export class GifService {

  private apiKey: string = 'VBCOYcc5M8QTdyCWWBBBQobBCDPNVCfu'
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  /**
   * Metodo GET del historial
   */
  get historial() {
    return [...this._historial]; // Se rompe la referencia y devuelve un nuevo array, no el privado de este servicio
  }

  constructor(private http: HttpClient) {
    // Si existe historial, se obtiene
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    // Si existen los resultados, se obtienen
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

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

      // Guardamos en el localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    // Se hace la peticion GET
    this
      .http
      .get<SearchGIFResponse>(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((response) => {

        // Obtenemos los resultados
        this.resultados = response.data;

        // Guardamos en el localStorage
        localStorage.setItem('resultados', JSON.stringify(this.resultados));

      })
  }

}
