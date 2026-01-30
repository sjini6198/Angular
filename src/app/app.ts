import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Main } from './shared/main/main';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Main,RouterLink,Home,About,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Develop1');
}
