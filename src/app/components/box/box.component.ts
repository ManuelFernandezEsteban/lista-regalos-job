import { Component, EventEmitter, Input, Output } from '@angular/core';
import { grupo } from '../../interfaces/grupo';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input()
  grupo!: grupo;
  



  constructor() { }

  seleccionado(){
    
    !this.grupo.selected;
    console.log(this.grupo);
        
  }
 
}
