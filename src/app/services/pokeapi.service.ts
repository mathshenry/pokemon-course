import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  http  = inject(HttpClient);
  pokemonData = signal<any>(null);
  loading = signal(false);

  fetch(pokemonName: string) {
    this.loading.set(true);
    this.pokemonData.set(null);
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.replaceAll(' ', '-').toLowerCase()}`)
      .pipe(
        finalize(() => this.loading.set(false))
      )
      .subscribe((response) => {
      if(response){
        this.pokemonData.set(response);
      }
    });
  }
}
