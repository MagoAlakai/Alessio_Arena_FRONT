import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Evento } from './../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = environment.urlEndPoint;
  constructor(
    private httpClient: HttpClient
  ) { }

  getEventos = async():Promise<Evento[]>=>{
    return await this.httpClient.get(`${this.url}eventos`).toPromise() as Promise<Evento[]>;
  }
}
