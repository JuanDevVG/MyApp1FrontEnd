import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  bdEmpleados: any;

  constructor(private conexion: ConexionService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.conexion.getEmpleados()
    .then(
      datos => {
        this.bdEmpleados = datos;
      }
    )
    .catch(
      error => {
        console.log(error);
      }
    )
  }

}
