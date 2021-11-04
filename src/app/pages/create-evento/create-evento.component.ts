import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/Evento';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.component.html',
  styleUrls: ['./create-evento.component.css']
})
export class CreateEventoComponent implements OnInit {

  public user:UsuarioModel;
  public eventoForm:FormGroup;
  public evento: Promise<Evento> | undefined

  constructor(
    private authService: AuthService,
    private formBuilder:FormBuilder,
    private eventosService: EventosService,
    private router: Router
  ) {
    this.eventoForm = this.formBuilder.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      name: ['', Validators.required],
      descripcion: '',
      place: ['', Validators.required],
      link_place: '',
      price: '',
      link_external: '',
      link_shop: '',
    })
  }

  ngOnInit() {

    //Acceder al USER a través de localStorage para ser usado en vistas
    this.user = this.authService.leerUser();
  }

  onSubmit = (form:FormGroup) =>{
    console.log(form.valid);
    console.log(form.value);
    if(form.valid){
      this.eventosService.createEvento(form.value)
          .then(res =>{
            console.log(res);
            Swal.fire({
              title: 'Evento creado',
              text: 'Este evento se añadirá al listado de eventos',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            this.router.navigateByUrl('/dashboard');
          }).catch(err=>{
            Swal.fire({
              title: 'Este evento no se ha creado!',
              text: err,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          });
    }
  }

}
