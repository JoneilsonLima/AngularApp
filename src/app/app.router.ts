import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';


const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule)  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
