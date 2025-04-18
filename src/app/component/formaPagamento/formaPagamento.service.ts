import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { FormaPagamento } from "./forma-pagamento-read/formaPagamento.model";


@Injectable({
    providedIn: 'root'
  })
  export class formaPagamentoService {
  
    baseUrl = "http://localhost:3001/formaPagamento"
  
    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
    showMessage(msg: string): void{
      this.snackBar.open(msg, 'X',{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }
    create(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
      return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento)
    }
  
    read(): Observable<FormaPagamento[]>{
      return this.http.get<FormaPagamento[]>(this.baseUrl)
    }
  
    readById(id: string): Observable<FormaPagamento>{
      const url = `${this.baseUrl}/${id}`
      return this.http.get<FormaPagamento>(url)
    }
  
    update(formaPagamento: FormaPagamento): Observable<FormaPagamento>{
      const url= `${this.baseUrl}/${formaPagamento.id}`
      return this.http.put<FormaPagamento>(url, formaPagamento)
    }
  
    delete(id:number): Observable<FormaPagamento>{
      const url= `${this.baseUrl}/${id}`
      return this.http.delete<FormaPagamento>(url)
    }
  }
  