import { Component, Input } from '@angular/core';

import { Grupo } from 'src/app/models/grupo.models';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input()
  grupo!: Grupo;
  

  constructor() { }
 
}
