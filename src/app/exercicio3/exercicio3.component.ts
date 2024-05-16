import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercicio3.component.html',
  styleUrl: './exercicio3.component.css'
})
export class Exercicio3Component {
  userInput: string = '';

}
