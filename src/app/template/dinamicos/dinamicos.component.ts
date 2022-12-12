import { Component } from '@angular/core';

interface Persona {
  nombre: string
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Adrián',
    favoritos: [
      {
        id: 1,
        nombre: 'League Of Legends'
      },
      {
        id: 2,
        nombre: 'Grand Theft Auto'
      },
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito}) // Asegurarnos que no enviamos ningúna referencia a el objeto
    this.nuevoJuego = ''; // vaciar input
    
  }

  guardar() {
    console.log('Formulario Enviado');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
