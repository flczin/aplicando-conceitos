import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio3Component } from './exercicio3/exercicio3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercicio3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aplicando-conceitos';
}
