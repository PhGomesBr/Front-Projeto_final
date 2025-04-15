import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read/contato-read.model';
import { ContatoService } from '../../contato/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit{
  contato: Contato = {
    telefone: '',
    celular: '',
    email: '',
  }

  //importando productService
  constructor(private contatoService: ContatoService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.contatoService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
