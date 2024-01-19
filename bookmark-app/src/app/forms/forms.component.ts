import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  email = new FormControl('', [Validators.required, Validators.email])

  getErrorMessage() {
    if(this.email.hasError('required')) {
      return 'You must enter a value'
    }
    return this.email.hasError('email') ? "Whoops, make sure it's a valid eamil" : ''
  }
}
