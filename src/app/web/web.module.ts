import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebRoutingModule } from './web-routing.module';

import { LibrosComponent } from './libros/libros.component';
import { DiscosComponent } from './discos/discos.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

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
    VideosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebRoutingModule
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
