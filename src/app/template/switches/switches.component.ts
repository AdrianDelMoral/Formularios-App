import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  get termsErrors(): any {
    return this.miFormulario?.controls['terminos']?.errors
  }

  persona = {
    genero: '',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false

  ngOnInit(): void {
  }

}
