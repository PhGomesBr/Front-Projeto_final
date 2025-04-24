import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { formaPagamentoService } from '../formaPagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit{
  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
  }

  constructor(private formaPagamentoService: formaPagamentoService,
    private router: Router) { }
 
  ngOnInit(): void {
   
  }

  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma Pagamento criado!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }
}
