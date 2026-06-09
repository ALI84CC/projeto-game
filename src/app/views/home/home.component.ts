import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo: string = 'Senai um futuro melhor'
  texto: string = 'Uma iniciativa SENAI, o Futuro.Digital nasce para democratizar o acesso ao ensino profissionalizante de qualidade, encurtando a distância entre você e a sua carreira de sucesso! Aqui, você conta todo suporte e apoio que precisa para alcançar o mais alto degrau da sua trajetória profissional e a excelência que só instituições como o SENAI e seus parceiros podem oferecer.'

}
