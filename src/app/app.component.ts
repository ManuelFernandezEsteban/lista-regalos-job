import { Component } from '@angular/core';
import { grupo } from './interfaces/grupo';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  

  lista:grupo[]=[]

  constructor(serviceData:DataService){
    serviceData.getData().subscribe(data=>{
      this.lista=data.data
    })
   
  }
 

}
