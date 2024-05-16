import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio4Component } from "./exercicio4/exercicio4.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Exercicio4Component]
})
export class AppComponent {
  title = 'aplicando-conceitos';
}
