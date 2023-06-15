import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Produto } from '../models/prduto';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
})

export class ProdutoDetalheComponent implements OnInit {
    @Input() produto: Produto;

    @Output() status: EventEmitter<Produto> = new EventEmitter();

    constructor(){}

    ngOnInit(): void {
        
    }

    emitirEvento(): void {
        this.status.emit(this.produto);
    }
}