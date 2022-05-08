import { Component } from '@angular/core';
import { grupo } from './interfaces/grupo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  
  lista:grupo[]=
   [
    {
      titulo:"Crew",
      descripcion:"Lista de regalos para el grupo crew",
      tags:[
        {
          tag:"Deportes de riesgo",

        },
        {
          tag:"Libros",
        },        
      ],
      icono:"./assets/icons/navy24px.png",
      iconoDescripcion:"icono tripulacion",
      selected:false
    },
   {
      titulo:"Family",
      descripcion:"Lista de regalos para el grupo family",
      tags:[
        {
          tag:"Family",

        },
        {
          tag:"Sport",
        },
      ],
      icono:"./assets/icons/family24px.png",
      iconoDescripcion:"icono family",
      selected:false
    }
    ,
    {
      titulo:"Other",
      descripcion:"Lista de regalos para el grupo other",
      tags:[
        {
          tag:"Singles",

        },
        {
          tag:"Sport",
        },
      ],
      icono:"./assets/icons/more-information24px.png",
      iconoDescripcion:"icono more",
      selected:false
    }
    ,
    {
      titulo:"Other",
      descripcion:"Lista de regalos para el grupo other",
      tags:[
        {
          tag:"Singles",

        },
        {
          tag:"Sport",
        },
        {
          tag:"Singles",

        },
        {
          tag:"Sport",
        },
        {
          tag:"Singles",

        },
        {
          tag:"Sport",
        },
      ],
      icono:"./assets/icons/more-information24px.png",
      iconoDescripcion:"icono more",
      selected:false
    }
    ,
    {
      titulo:"Other",
      descripcion:"Lista de regalos para el grupo other",
      tags:[
        {
          tag:"Singles",

        },
        {
          tag:"Sport",
        },
      ],
      icono:"./assets/icons/more-information24px.png",
      iconoDescripcion:"icono more",
      selected:false
    }
    ,
  ]


}
