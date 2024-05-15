import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio2Component } from './exercicio2/exercicio2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aplicando-conceitos';
}
