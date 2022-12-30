import { Component } from '@angular/core';
import { PrincipalportafolioService } from 'src/app/servicios/principalportafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacion: any;

  constructor(
    private principalportafolioService : PrincipalportafolioService ){}

    ngOnInit(): void{
  
      this.principalportafolioService.getDatos().subscribe (datos=>{
        console.log(datos);

        this.educacion=datos.educacion;

    });
  }



}
