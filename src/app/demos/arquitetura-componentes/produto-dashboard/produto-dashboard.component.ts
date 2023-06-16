import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Produto } from '../models/prduto';
import { Observable, fromEvent } from 'rxjs';
import { produtoCountComponent } from '../componentes/produto-count.component';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild(produtoCountComponent, {static: false}) contador: produtoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) produto: QueryList<ProdutoDetalheComponent>

  constructor() { }

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
      },
      {
        id: 2,
        nome: 'Teste',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg'
      },
      {
        id: 3,
        nome: 'Teste',
        ativo: false,
        valor: 300,
        imagem: 'laptop.jpg'
      },
      {
        id: 4,
        nome: 'Teste',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg'
      },
      {
        id: 5,
        nome: 'Teste',
        ativo: false,
        valor: 500,
        imagem: 'teclado.jpg'
      },
      {
        id: 6,
        nome: 'Teste',
        ativo: false,
        valor: 600,
        imagem: 'headset.jpg'
      },
    ]
  }

  ngAfterViewInit(): void {
    console.log('Objeto do contador', this.contador.produtos);
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('Clicou no texto!')
    })

    this.produto.forEach((produto: ProdutoDetalheComponent) => {
      console.log(produto.produto)
    })
  }

  mudarStatus(produto: Produto): void {
    produto.ativo = !produto.ativo; 
  }

}
