import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPasswordValidator } from 'src/app/validators/matchpassword.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  //Estrutura do formulário
  formRegister = new FormGroup({
    //campo 'nome':
    nome: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZÀ-Üà-ü\s]{8,100}$/)
    ]),
    //campo 'email':
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    //campo 'senha':
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*_+\-=])[a-zA-Z\d!@#$%&*_+\-=]{8,}$/)
    ]),
    //campo 'senha confirmação'
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: [
      //adicionando o validador para comparação das senhas
      MatchPasswordValidator.matchPassword
    ]
  });


  //função auxiliar para exibir os erros de validação
  //de cada campo (FormControl) do formulário
  get form(): any {
    return this.formRegister.controls;
  }


  //função para capturar o SUBMIT do formulário
  onSubmit(): void {


    //imprimindo os valores dos campos do formulário
    //no console do navegador
    console.log(this.formRegister.value);


  }


}





