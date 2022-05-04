import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = 'taskBoard';

  lista = [
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
      ]
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
      ]
    },
  ]


}
