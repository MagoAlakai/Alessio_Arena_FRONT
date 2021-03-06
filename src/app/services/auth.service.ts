import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = `${environment.fqdn}${environment.urlEndPoint}`;
  public userToken:string;
  public user: UsuarioModel;

  constructor(
    private httpClient: HttpClient
  ) { }

  //REGISTER
  register = async(form:any):Promise<any> =>{
    console.log(this.url);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return await this.httpClient.post(`${this.url}register`, form, httpOptions).toPromise() as Promise<any>;
  }

  // LOGIN
  getToken = async(loginUser:UsuarioModel):Promise<any> =>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return await this.httpClient.post(`${this.url}login`, loginUser, httpOptions).toPromise();
  }

  // LOGOUT
  logout = async(token:string) =>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };
    return await this.httpClient.get(`${this.url}logout`, httpOptions).toPromise();
  }

  //FORGOT PASSWORD
  forgotPassword = async(email) =>{
    return await this.httpClient.post(`${this.url}forgot-password`, email).toPromise();
  }

  //Acceder al USER Autenticado
  getUser = async(email:string):Promise<any> =>{
    return await this.httpClient.get(`${this.url}user/${email}`).toPromise();
  }

  //Funciones para manipular/comprobar TOKEN

  guardarToken (token: string){
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  eliminarToken (){
    localStorage.removeItem('token');
  }

  leerToken (){

    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  //Funciones para manipular/comprobar USER

  isAuthenticated ():boolean{
    this.userToken = localStorage.getItem('token');
    if(this.userToken == undefined){
      return false;
    }else{
      return true;
    }

  }

  guardarUser (user: UsuarioModel){
    localStorage.setItem('user', JSON.stringify(user));
  }

  eliminarUser (){
    localStorage.removeItem('user');
  }

  leerUser (){

    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'));
    }else{
      this.user = null;
    }

    return this.user;
  }

}
