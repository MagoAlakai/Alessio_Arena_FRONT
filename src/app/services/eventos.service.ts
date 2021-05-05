import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from './../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = environment.urlEndPoint;
  public token:string;

  constructor(
    private httpClient: HttpClient
  ) { }

  getEventos = async():Promise<Evento[]>=>{
    this.token = localStorage.getItem('token');
    console.log(this.token);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return await this.httpClient.get(`${this.url}eventos`, httpOptions).toPromise() as Promise<Evento[]>;
  }

  createEvento = async(evento:Evento):Promise<Object> =>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return await this.httpClient.post(`${this.url}eventos/create`, evento, httpOptions).toPromise();
  }
}
