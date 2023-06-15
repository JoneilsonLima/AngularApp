import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/prduto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit {

  produtos: Produto[];

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

}
