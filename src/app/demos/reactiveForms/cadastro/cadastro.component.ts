import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validations';
import { AfterContentInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from './models/IUsuario';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit, AfterContentInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: IUsuario;
  formResult: string = '';
  MASKS = '00-00'

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido',
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entr 6 e 15 caracteres',
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entr 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
   }

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

  ngAfterContentInit(): void {

  }

  adicionarUsuario(): void {
    if(this.cadastroForm.valid && this.cadastroForm.dirty) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      console.log(this.usuario)
    }
  }

}
