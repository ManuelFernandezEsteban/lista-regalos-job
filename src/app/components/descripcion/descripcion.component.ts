import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent{

  @Input()descripcion:string="";

  constructor() { }

  

}
