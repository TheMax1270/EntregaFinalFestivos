import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerificarFecha } from './verificar-fecha/verificar-fecha';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerificarFecha],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
