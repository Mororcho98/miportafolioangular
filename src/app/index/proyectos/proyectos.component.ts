import { Component } from '@angular/core';
import { PrincipalportafolioService } from 'src/app/servicios/principalportafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: any;

  constructor(
    private principalportafolioService : PrincipalportafolioService ){}

    ngOnInit(): void{
  
      this.principalportafolioService.getDatos().subscribe (datos=>{
        console.log(datos);

        this.proyectos=datos.proyectos;

    });
  }

}
