import { MatPanel } from './mat-panel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-panels',
  templateUrl: './material-panels.component.html',
  styleUrls: ['./material-panels.component.css']
})
export class MaterialPanelsComponent implements OnInit {

  @Input() panels: MatPanel;

  constructor() { }

  ngOnInit() {
  }

}
