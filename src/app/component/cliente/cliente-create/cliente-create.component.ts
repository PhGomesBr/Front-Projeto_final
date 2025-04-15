import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-read/cliente.model';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit{
  cliente: Cliente = {
    nome: '',
    cpf: 0,
    dataNacimento: 0,
    status: ''
  }

  //importando ClienteService
  constructor(private clienteService: ClienteService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('cliente criado!')
      this.router.navigate(['/cliente'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente'])
  }
}
