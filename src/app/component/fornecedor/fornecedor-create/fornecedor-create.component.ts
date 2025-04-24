import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit{
  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forCnpj: 0,
    forRazaoSocial: '',
  }

  //importando productService
  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }
}
