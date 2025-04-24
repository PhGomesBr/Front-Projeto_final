import { Component } from '@angular/core';
import { Contato } from '../contato-read.model';
import { contatoService } from '../contato.service';

@Component({
  selector: 'app-contato-read',
  templateUrl: './contato-read.component.html',
  styleUrls: ['./contato-read.component.css']
})
export class ContatoReadComponent {
  contato!: Contato[]
  displayedColumns = ['conId', 'conTelefoneComercial', 'conCelular', 'conEmail', 'action']

  constructor(private contatoService: contatoService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contato => {
      this.contato = contato
      console.log(contato)  
    })
  }
}
