import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Meus imports utilizados para validar
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  //Uma das validacoes nativas do angular
  signupForm: FormGroup;
  
  constructor(
    //Precisamos injectar no construtor o cara que será responsavel por fazer essa validacao
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
    // No Construtor  

    //Declaro meu pattern escopo
    let valEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    this.signupForm = this.formBuilder.group({
      //Passe os campos do formulario que devem ser validados
  
      //NOME: ARRAY COM OS TIPOS DE VALIDACAO
      name: ['', [Validators.required, Validators.minLength(8)]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(valEmail)])],
      password: ['', [Validators.required, Validators.minLength(8)]], 
      // '' -> Valor inicial do campo, [] -> Array usando o Validators    
    });

  }

  onSubmit(): void{
    //Agora adicionamos nossa validacao
    console.log("Cadastrado");
  }
}
