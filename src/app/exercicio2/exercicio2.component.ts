import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [],
  templateUrl: './exercicio2.component.html',
  styleUrl: './exercicio2.component.css'
})
export class Exercicio2Component {

  colors: Array<string> = [
    "blue",
    "green",
    "red",
  ]

  chosen: string = "";

  pickBackground(){
    this.chosen = this.colors[this.randomInteger(0, this.colors.length - 1)]
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
