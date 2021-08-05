import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Web- Components
import { WebComponent } from './web.component';
import { LibrosComponent } from './libros/libros.component';
import { DiscosComponent } from './discos/discos.component';
import { VideosComponent } from './videos/videos.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [

  //Vistas usuarios

  {
    path: '',
    component: WebComponent,
    children: [
      { path: 'libros', component: LibrosComponent },
      { path: 'discos', component: DiscosComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'biografia', component: BiografiaComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'contacto', component: ContactoComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
   ],
  exports: [ RouterModule ]
})
export class WebRoutingModule { }
