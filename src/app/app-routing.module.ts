import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';
import { ContatoCreateComponent } from './component/contato/contato-create/contato-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
},
{
    path: "products",
    component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "cliente",
  component: ClienteCrudComponent
},
{
path: "cliente/create",
component: ClienteCreateComponent
},
{
  path: "fornecedor",
  component: FornecedorCrudComponent
},
{
path: "fornecedor/create",
component: FornecedorCreateComponent
},
{
  path: "contato",
  component: ContatoCrudComponent
},
{
path: "contato/create",
component: ContatoCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
