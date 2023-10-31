// Luokkaosa, sovelluslogiikka, TS-koodia
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // TS-piirre. @Input() kertoo, että hero tulee inputtina
  // äitikomponentila. hero on optionaalinen, eli voi olla undefined
  @Input() hero?: Hero;
}
