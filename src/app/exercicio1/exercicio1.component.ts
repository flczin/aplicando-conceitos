import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [],
  templateUrl: './exercicio1.component.html',
  styleUrl: './exercicio1.component.css'
})
export class Exercicio1Component {

  msg: string = "Using interpolation to show this message"
  isHidden: boolean = false;

  changeHiddenState() {
    this.isHidden = !this.isHidden;
  }

}
