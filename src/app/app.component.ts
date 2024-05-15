import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Component } from './exercicio1/exercicio1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercicio1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aplicando-conceitos';
}
