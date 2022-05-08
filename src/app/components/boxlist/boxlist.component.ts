import { Component, Input } from '@angular/core';
import { grupo } from '../../interfaces/grupo';


@Component({
  selector: 'app-boxlist',
  templateUrl: './boxlist.component.html',
  styleUrls: ['./boxlist.component.css']
})
export class BoxlistComponent {

  @Input()lista:grupo[]=[]

  constructor() { }
  
}
