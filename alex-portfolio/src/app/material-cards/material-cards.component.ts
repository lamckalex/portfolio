import { MatCardObject } from './mat-card-object';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-cards',
  templateUrl: './material-cards.component.html',
  styleUrls: ['./material-cards.component.css']
})
export class MaterialCardsComponent implements OnInit {

  @Input() cards: MatCardObject[];

  constructor() { }

  ngOnInit() {
  }

}
