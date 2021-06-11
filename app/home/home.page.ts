import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string="";
  mostrar: boolean=false;

  constructor(private router:Router) {}

  listar (){
    this.router.navigate(['../listar']);
  }

  datos (){
    if (this.nombre.length > 0){
      this.router.navigate(['../datos', this.nombre]);
    }
  }

  ayuda (){
    if (this.mostrar){
      this.mostrar=false;
    } else {
      this.mostrar=true;
    }
  }

}
