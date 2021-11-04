import { Component, OnInit } from '@angular/core';
import { EventosService } from "../../services/eventos.service";

import { Evento } from './../../models/Evento';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public eventos: Promise<Evento[]> | undefined;
  public sortet_eventos : Evento[] | undefined;

  constructor(
    private eventosService: EventosService
  ) {
 }

  ngOnInit() {
   this.getEventos();
   this.sortEventos();
   console.log(this.getEventos());
   console.log (this.sortEventos());
  }

  getEventos = async() =>{
    return this.eventos = this.eventosService.getEventos();
  }

  sortEventos = async() =>{
    this.sortet_eventos = (await this.eventos).sort(function(a, b){
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return this.sortet_eventos;
  }

}
