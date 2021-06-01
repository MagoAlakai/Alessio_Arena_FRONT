import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';
import { Evento } from '../../models/Evento';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public eventos: Promise<Evento[]> | undefined;
  public user:any;

  constructor(
    private router:Router,
    private authService:AuthService,
    private eventosService:EventosService,
  ) { }

  ngOnInit() {

    //Acceder al USER a través de localStorage para ser usado en vistas
    this.user = this.authService.leerUser();

    //Limpiar localstorage para hacer logout si token expires en 60min
    setTimeout(()=>{
      this.logout();
    },60000*60);

    //Leer todos los eventos
    this.getEventos();
  }

  getEventos = async() =>{
    return this.eventos = this.eventosService.getEventos();
  }

  deleteEvento = async(id:number) =>{

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimina este evento!'
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        this.eventosService.deleteEvento(id);
        Swal.fire({
          title: 'Este evento se ha eliminado!',
          text: 'Te enviaremos al listado de eventos.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    }).finally(()=> this.getEventos());
  }

  logout() {

    //Accedemos al token y enviamos petición ajax para logout
    let userToken: string = this.authService.leerToken();
    this.authService.logout(userToken)
      .then(resp =>{
        console.log(resp);
      }).catch(error => console.log(error));

    //Eliminamos token y user de localStorage
    this.authService.eliminarToken();
    this.authService.eliminarUser();

    //Alert success
    Swal.fire({
      title: 'Thanks for coming by!',
      text: 'We hope to see you soon',
      icon: 'success',
      confirmButtonText: 'Ok',
    });

    //Redirigimos a vista de login
    this.router.navigateByUrl('/login');

  }

}
