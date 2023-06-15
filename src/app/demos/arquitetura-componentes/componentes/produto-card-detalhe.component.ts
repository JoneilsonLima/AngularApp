import { Component, Input, OnInit } from "@angular/core";
import { Produto } from '../models/prduto';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
})

export class ProdutoDetalheComponent implements OnInit {
    @Input() produto: Produto;

    constructor(){}

    ngOnInit(): void {
        
    }
}