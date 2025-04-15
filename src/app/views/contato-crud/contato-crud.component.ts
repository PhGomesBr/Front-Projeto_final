import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.css']
})
export class ContatoCrudComponent implements OnInit{
    //Contrutor para configurar botão para tela de produto
    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    
    //Criando interação com botões
    navigateToContatoCreate(): void{
      this.router.navigate(['/contato/create'])
    }
}
