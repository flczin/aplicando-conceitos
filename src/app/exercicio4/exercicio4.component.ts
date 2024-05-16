import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio4.component.html',
  styleUrl: './exercicio4.component.css'
})
export class Exercicio4Component {

  cor: string = '';
  tamanho: string = '';
  visivel: boolean = false;

}
