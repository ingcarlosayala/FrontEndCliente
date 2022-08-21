import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Clientes } from '../interfaces/IClientes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl:string = environment.apiUrl

  constructor(private http:HttpClient) { }

  GetClientes(){
     return this.http.get<Clientes>(this.apiUrl);
  }

  PostCliente(cliente:any){
    return this.http.post<any>(this.apiUrl,cliente);
  }
}
