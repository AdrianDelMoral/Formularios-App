import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{ // dependencias de esta directiva llamada customMin
        provide: NG_VALIDATORS, // Servicio que quiero inyectarse importa arriba
        useExisting: CustomMinDirective, // usaremos la clase de abajo en este caso, que es la CustomMinDirective
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number; // viene del input, el numero minimo que hemos indicado

    validate(control: FormControl) { // obtendremos el Control(Input), y su tipo(FormControl)

        const inputValue = control.value; // guardaremos en una constante, el valor del control

        // Si el inputValue es menor al minimo que indicamos en el HTML nosotros(que en este caso es '0').
        return (inputValue < this.minimo)
            // Nos devuelva true. 
            ? { 'customMin': true }
            //En caso contrario, si no hay error, devolveremos null:
            : null;
    }

}