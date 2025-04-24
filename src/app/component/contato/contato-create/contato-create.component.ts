import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read.model';
import { Router } from '@angular/router';
import { contatoService } from '../contato.service';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit{
  contato: Contato = {
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: '',
  }

  constructor(private contatoService: contatoService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.contatoService.showMessage('contato criado!')
      this.router.navigate(['/contato'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contato'])
  }
}
