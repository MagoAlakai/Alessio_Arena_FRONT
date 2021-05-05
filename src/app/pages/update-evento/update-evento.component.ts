import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/Evento';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-update-evento',
  templateUrl: './update-evento.component.html',
  styleUrls: ['./update-evento.component.css']
})
export class UpdateEventoComponent implements OnInit {

  public user:UsuarioModel;
  public eventoForm:FormGroup;
  public evento: Promise<Evento> | undefined;
  private routeParamId: string| number | null ;

  constructor(
    private authService: AuthService,
    private formBuilder:FormBuilder,
    private eventosService: EventosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.eventoForm = this.formBuilder.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      name: ['', Validators.required],
      place: ['', Validators.required],
      price: ['', Validators.required],
      link_external: ['', Validators.required],
      link_shop: ['', Validators.required],
    })
  }

  ngOnInit() {
    //Acceder al USER a través de localStorage para ser usado en vistas
    this.user = this.authService.leerUser();

    //Acceder al id y datos del evento a modificar
    this.getEvento();
  }

  onSubmit = (form:FormGroup) =>{
    console.log(form.valid);
    console.log(form.value);
    if(form.valid){
      this.eventosService.updateEvento(form.value, this.routeParamId)
          .then(res =>{
            console.log(res);
            Swal.fire({
              title: 'Evento actualizado',
              text: 'Este evento se actualizará en el listado de eventos',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            this.router.navigateByUrl('/dashboard');
          }).catch(err=>{
            Swal.fire({
              title: 'Este evento no se ha actualizado!',
              text: err,
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          });
    }
  }

  getEvento = async() =>{
    this.routeParamId = this.activatedRoute.snapshot!.paramMap.get('id');
    if(this.routeParamId){
      this.routeParamId = parseInt(this.routeParamId);
      this.eventosService.getEventoById(this.routeParamId)
      .then(res=>{
        this.eventoForm.setValue({
          date: res.date,
          hour: res.hour,
          name: res.name,
          place: res.place,
          price: res.price,
          link_external: res.link_external,
          link_shop: res.link_shop,
        })
      }).catch(err=>{
        console.log(err);
      });
    }
  }

}
