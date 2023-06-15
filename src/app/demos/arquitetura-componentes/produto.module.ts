import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";


import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { produtoCountComponent } from "./componentes/produto-count.component";
registerLocaleData(localePt);


@NgModule({
    declarations: [  //componentes
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        produtoCountComponent
    ], 
    imports: [  //modulos
         CommonModule,
        ProdutoRoutingModule
    ],  
    exports: []
})
export class ProdutoModule {}