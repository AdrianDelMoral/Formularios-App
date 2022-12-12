import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid // si es invalido
      && this.miFormulario?.form.controls['producto']?.touched; // si se ha tocado el input, mostrará el error
  }

  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched // si se ha tocado el input
      && this.miFormulario?.form.controls['precio']?.value < 0; // si es menor a 0, mostrará el error
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    // console.log(this.miFormulario);
    console.log('Formulario enviado Correctamente');

    this.miFormulario.form.reset({
      producto: 'Sin Nombre',
      precio: 0,
      existencias: 0
    });
  }

}
