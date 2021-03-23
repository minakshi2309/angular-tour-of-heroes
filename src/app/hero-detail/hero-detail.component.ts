import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroDetailComponent {
  constructor() {}
  ngOnInit() {

  }

  @Input hero?: Hero;

}
