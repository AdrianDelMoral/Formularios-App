import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider], []],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  get emailErrorMsg(): string {
    const errors = this.registroForm.get('email')?.errors;
    
    if (errors?.['required']) {
      return 'El Correo es Obligatorio';
    }

    if (errors?.['pattern']) {
      return 'El Texto Introducido Debe Tener Formato Correo';
    }

    if (errors?.['emailUsado']) {
      return 'El Correo electrónico ya está en uso';
    }

    return ''; // si no hay ningún error devolverá vacio, para cumplir la regla de devolver un string
  }

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.registroForm.reset({
      nombre: 'Adrián DelMoral',
      email: 'iFullStart@gmail.com',
      username: 'iFullSt',
      password: '123456',
      password2: '123456',
    })
  }

  campoNoValido(campo: string) {
    return this.registroForm.get(campo)?.invalid
      && this.registroForm.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.registroForm.value);

    this.registroForm.markAsTouched();
  }


}