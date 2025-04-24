import { Component } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { formaPagamentoService } from '../formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {
    formaPagamento!: FormaPagamento[]
    displayedColumns = ['fpgId', 'fpgDescricao', 'action']
  
    constructor(private formaPagamentoService: formaPagamentoService) { }
  
    ngOnInit(): void {
      this.formaPagamentoService.read().subscribe(formaPagamento => {
        this.formaPagamento = formaPagamento
        console.log(formaPagamento)  
      })
    }
}
