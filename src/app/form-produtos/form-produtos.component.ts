import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  @Output() onSalvar = new EventEmitter<any>();

  produto: any = {id: 0, nome:"", preco: 0}

  cadastrar() {
    alert(this.produto.nome+" cadastrado com sucesso!");
    this.onSalvar.emit(this.produto);
    this.produto = {id: 0, nome:"", preco: 0}
  }
}
