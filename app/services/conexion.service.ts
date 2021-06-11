import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(public http: HttpClient) { }

  myHttp = "http://127.0.0.1:80"; //Direccion backend

  getEmpleados() {
    return this.http.get(
      this.myHttp+"/getEmpleados")
      .toPromise();
  }

}
