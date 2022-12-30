import { Component } from '@angular/core';
import { PrincipalportafolioService } from 'src/app/servicios/principalportafolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

experiencias: any;

  constructor(
    private principalportafolioService : PrincipalportafolioService ){}

    ngOnInit(): void{
  
      this.principalportafolioService.getDatos().subscribe (datos=>{
        console.log(datos);

        this.experiencias=datos.experiencias;

    });
  }
}
