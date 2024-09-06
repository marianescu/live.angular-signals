import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersoanaComponent } from './components/persoana/persoana.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersoanaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
