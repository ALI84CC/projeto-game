import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailInput: string = '';
  senhaInput: string='';

  mensagem: string='';
  isSucesso: boolean = false;


  executarLogin(){

    const emailCorreto = 'teste@teste.com';
    const senhaCorreta = '123456';

    if(this.emailInput === emailCorreto && this.senhaInput === senhaCorreta){
      this.mensagem = 'seja bem-vindo, você está logado';
      this.isSucesso = true;
    }else{
      this.mensagem = 'E-mail ou senha incorreto'
      this.isSucesso = false;
    }
  }
}
