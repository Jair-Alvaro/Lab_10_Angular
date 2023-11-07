import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false;
  showAlert: boolean = false;
  showInvalidEmailAlert: boolean = false;
  showIncompleteFieldsAlert: boolean = false;
  datosIngresados: { nombre: string, email: string }[] = [];
  mostrarConfirmacion: boolean = false;

  validateForm() {
    this.isFormValid = this.nombre.trim().length > 0 && this.email.trim().length > 0;
  }

  mostrarAlertaConfirmacion() {
    this.mostrarConfirmacion = true;
  }

  manejarConfirmacion(confirmado: boolean) {
    if (confirmado) {
      this.onSubmit();
    }
    this.mostrarConfirmacion = false;
  }

  onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.isFormValid && emailRegex.test(this.email)) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);

      this.datosIngresados.push({ nombre: this.nombre, email: this.email });

      this.nombre = '';
      this.email = '';
      this.isFormValid = false;
    } else if (this.isFormValid) {
      this.showInvalidEmailAlert = true;
      setTimeout(() => {
        this.showInvalidEmailAlert = false;
      }, 3000);
    } else {
      this.showIncompleteFieldsAlert = true;
      setTimeout(() => {
        this.showIncompleteFieldsAlert = false;
      }, 3000);
    }
  }
}
