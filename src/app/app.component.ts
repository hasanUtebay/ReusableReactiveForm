import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddressFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ReusableReactiveForm';
  form = new FormGroup({
    fullName: new FormControl(''),
  });
  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
