import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';

  listaProdutos: any[] = [
    { id:1, nome:"Produto 1", preco: 100},
    { id:2, nome:"Produto 2", preco: 200},
    { id:3, nome:"Produto 3", preco: 300},
    { id:4, nome:"Produto 4", preco: 400},
    { id:5, nome:"Produto 5", preco: 500},
  ];

  addProduto(produto: any) {
    this.listaProdutos.push(produto);
  }
}
