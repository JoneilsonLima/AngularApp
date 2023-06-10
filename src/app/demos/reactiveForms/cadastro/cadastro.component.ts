import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from './models/IUsuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: IUsuario;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: ['', Validators.required],
      senhaConfirmacao: ['', Validators.required]
    })
  }

  adicionarUsuario(): void {
    if(this.cadastroForm.valid && this.cadastroForm.dirty) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      console.log(this.usuario)
    }
  }

}
