import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Misarticulos } from '../models/misarticulos';


@Injectable({
  providedIn: 'root',
})
export class MisarticulosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    //this.resourceUrl = 'https://pymes2021.azurewebsites.net/api/contactos/';
    //this.resourceUrl = 'https://pav2.azurewebsites.net/api/articulos/';
    this.resourceUrl = 'https://pav2.azurewebsites.net/api/libros/';
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

  post(obj: Misarticulos) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(Id: number, obj: Misarticulos) {
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }

}
