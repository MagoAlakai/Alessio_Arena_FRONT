import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages - Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateEventoComponent } from './pages/create-evento/create-evento.component';

//Guards
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  //Vistas usuarios
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' },

  //Auth
  { path: 'register', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  //Crud
  { path: 'eventos/create', component: CreateEventoComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
