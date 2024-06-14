import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(){
    this.getData();
  }

    getData(){
      fetch("https://api.coinlore.net/api/tickers/")
      .then(dados => dados.json())
      .then(dados => {console.log(dados)})
    }
}
