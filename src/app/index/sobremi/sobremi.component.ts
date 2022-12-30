import { Component, OnInit } from '@angular/core';
import { PrincipalportafolioService } from 'src/app/servicios/principalportafolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent {
  //esta es una fomar de traer datos
  //nombre= 'Willian';
  //apellido= 'Torres';

  //Crear variable de instancia para almacenar los datos con los que trata 
  titulo: string='';
  nombre: string='';
  apellido: string='';
  sobremi: string='';

  constructor(
    //Inyectar el servicio para tener acceso en la clase  los metodos
    private principalportafolioService : PrincipalportafolioService ){}

    ngOnInit(): void{
      //Esto es almacenar en la variable de instancia los datos recuprados por el servicio
      this.principalportafolioService.getDatos().subscribe (datos=>{
        console.log(datos);
        //definir informacion a mostrar
        this.titulo=datos.titulo;
        this.nombre=datos.nombre;
        this.apellido=datos.apellido;
        this.sobremi=datos.sobremi
    });
  }
}
