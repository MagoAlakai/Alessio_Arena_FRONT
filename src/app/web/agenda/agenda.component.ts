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

  constructor(
    private eventosService: EventosService
  ) {
 }

  ngOnInit() {
   this.getEventos();
   console.log(this.getEventos());
  }

  getEventos = async() =>{
    return this.eventos = this.eventosService.getEventos();
  }

}
