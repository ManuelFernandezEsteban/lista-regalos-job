import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { grupo } from '../interfaces/grupo';

const baseUrl:string=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${baseUrl}/data.json`);
  }
}
