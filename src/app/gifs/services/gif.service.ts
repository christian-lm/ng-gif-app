import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root' // Le dice a Angular que este servicio va a ser único y global en toda la app
})
export class GifService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial]; // Se rompe la referencia y devuelve un nuevo array, no el privado de este servicio
  }

  buscarGIFs(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }

}
