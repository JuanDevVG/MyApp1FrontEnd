import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  nombre: string="";
  datos:Array<any>=[];
  deportes:Array<string>=["Futbol","Voleibol","Natacion"];
  deporteElegido: string="";

  constructor(private recibe: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.recibe.snapshot.paramMap.get('id');
    this.agregaDato();
  }

  agregaDato(){
    this.datos = [
      {
        nombre: "Diego",
        apellido: "Pinilla",
        edad: 25,
        deporte: "Futbol",
        imagen: "https://mypaginaadsi.000webhostapp.com/futbol.jpg"
      },
      {
        nombre: "Juan",
        apellido: "Velasco",
        edad: 16,
        deporte: "Voleibol",
        imagen: "https://mypaginaadsi.000webhostapp.com/voleibol.jpg"
      },
      {
        nombre: "Natalia",
        apellido: "Perez",
        edad: 22,
        deporte: "Natacion",
        imagen: "https://mypaginaadsi.000webhostapp.com/natacion.jpg"
      }
    ]
  }

  elegido(i){
    this.deporteElegido = this.deportes[i];
  }

}
