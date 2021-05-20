import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { LibrosComponent } from './libros/libros.component';
import { DiscosComponent } from './discos/discos.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    LibrosComponent,
    DiscosComponent,
    TraduccionesComponent,
    BiografiaComponent,
    AgendaComponent,
    ContactoComponent,
    WebComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    LibrosComponent,
    DiscosComponent,
    TraduccionesComponent,
    BiografiaComponent,
    AgendaComponent,
    ContactoComponent,
    WebComponent,
  ]
})
export class WebModule { }
