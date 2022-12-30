import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//Esto es para hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalportafolioService {
//el primer http se llama alias
  constructor(private http:HttpClient) { }

  //Metodo observable que devuelve los datos
  getDatos():Observable<any>{
    //Se llama el json con su path, o bien en su lugar se puede poner una URL para traer datos de un json online
    return this.http.get('./assets/json/datosportafolio.json')
  }
}
