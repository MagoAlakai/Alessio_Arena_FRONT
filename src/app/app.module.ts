import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';

import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CreateEventoComponent } from './pages/create-evento/create-evento.component';
import { UpdateEventoComponent } from './pages/update-evento/update-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    DashboardComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateEventoComponent,
    UpdateEventoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
