import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit{
    //Contrutor para configurar botão para tela de fornecedor
    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    
    //Criando interação com botões
    navigateToFornecedorCreate(): void{
      this.router.navigate(['/fornecedor/create'])
    }
}
