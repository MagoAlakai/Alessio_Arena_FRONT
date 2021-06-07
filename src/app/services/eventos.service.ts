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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return await this.httpClient.get(`${this.url}eventos`, httpOptions).toPromise() as Promise<Evento[]>;
  }

  getEventoById = async(id: string | number | null):Promise<Evento>=>{

    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return await this.httpClient.get(`${this.url}eventos/${id}`, httpOptions).toPromise() as Promise<Evento>;
  }

  createEvento = async(evento:Evento):Promise<Object> =>{

    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return await this.httpClient.post(`${this.url}eventos/create`, evento, httpOptions).toPromise() as Promise<Object>;
  }

  updateEvento = async(evento:Evento, id: string | number | null):Promise<Object> =>{

    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    console.log(httpOptions.headers);
    return await this.httpClient.put(`${this.url}eventos/update/${id}`, evento, httpOptions).toPromise() as Promise<Object>;
  }

  deleteEvento = async(id: number):Promise<Object> =>{

    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return await this.httpClient.delete(`${this.url}eventos/delete/${id}`, httpOptions).toPromise() as Promise<Object>;
  }
}
