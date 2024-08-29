import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {PokeapiService} from "./services/pokeapi.service";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, ReactiveFormsModule, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-unifei';
  nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  pokeApiService = inject(PokeapiService)

  constructor() {
  }

  fetchPokemon(){
    this.pokeApiService.fetch(this.nameControl.value!);
  }
}
