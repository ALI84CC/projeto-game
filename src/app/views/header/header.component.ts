import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  aoClicarLogin(): void {
    console.log('O usuário clicou no botão de login!');
  }
}
