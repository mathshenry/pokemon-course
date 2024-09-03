import {Component, input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss'
})
export class PokeCardComponent {
  pokemon = input<any>();
}
