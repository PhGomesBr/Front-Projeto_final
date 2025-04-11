import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './component/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FornecedorReadComponent } from './component/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ClienteReadComponent } from './component/cliente/cliente-read/cliente-read.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { FormaPagamentoReadComponent } from './component/formaPagamento/forma-pagamento-read/forma-pagamento-read.component'; 
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ContatoReadComponent } from './component/contato/contato-read/contato-read.component';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    FornecedorReadComponent,
    FornecedorCrudComponent,
    ClienteReadComponent,
    ClienteCrudComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoCrudComponent,
    ContatoReadComponent,
    ContatoCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
