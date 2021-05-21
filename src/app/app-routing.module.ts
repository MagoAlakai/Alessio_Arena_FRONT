import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth & Crud - Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CreateEventoComponent } from './pages/create-evento/create-evento.component';
import { UpdateEventoComponent } from './pages/update-evento/update-evento.component';


//Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  //Auth
  { path: 'register', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  //Crud
  { path: 'eventos/create', component: CreateEventoComponent, canActivate:[AuthGuard]  },
  { path: 'eventos/update/:id', component: UpdateEventoComponent, canActivate:[AuthGuard]  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
