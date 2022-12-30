import { Component } from '@angular/core';
import { PrincipalportafolioService } from 'src/app/servicios/principalportafolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

habilidades: any;


  constructor(
    private principalportafolioService : PrincipalportafolioService ){}

    ngOnInit(): void{
  
      this.principalportafolioService.getDatos().subscribe (datos=>{
        console.log(datos);
        
        this.habilidades=datos.habilidades
        
    });

  }
}
