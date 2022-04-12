import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Thea";
  text: string = "";

  pessoas = [{nome: "Oliver", sobrenome: "Queen"}, {nome: "Mia", sobrenome: "Queen"}, {nome: "Barry", sobrenome: "Allen"}, {nome: "Bruce", sobrenome: "Wayne"}];

  constructor () {

  }

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }

  public clique(nome: string): void {
    console.log("Clicou em mim", nome)
  }

}

