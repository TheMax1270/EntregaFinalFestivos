import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verificar-fecha',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './verificar-fecha.html',
  styleUrls: ['./verificar-fecha.css']
})
export class VerificarFecha {
  fechaSeleccionada: string = '';
  resultado: any = null;

  constructor(private http: HttpClient) {}

  verificarFecha() {
    setTimeout(() => {
      if (!this.fechaSeleccionada) return;

      const [año, mes, dia] = this.fechaSeleccionada.split('-');
      const url = `/festivos/verificar/${año}/${parseInt(mes)}/${parseInt(dia)}`;

      this.http.get(url, { responseType: 'text' }).subscribe({
        next: (respuesta) => {
          try {
            this.resultado = JSON.parse(respuesta);
          } catch (e) {
            this.resultado = { mensaje: respuesta };
          }
        },
        error: () => {
          this.resultado = { mensaje: 'Error al consultar el backend.' };
        }
      });
    }, 0); 
  }
}
