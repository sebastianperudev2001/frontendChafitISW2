import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


interface Gender {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),

    })
  }
  genders: Gender[] = [
    { value: 'F', viewValue: 'Female' },
    { value: 'M', viewValue: 'Male' },
  ];


  register() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      formData.name = formData.name.toUpperCase();
      formData.lastName = formData.lastName.toUpperCase();
      formData.email = formData.email.toLowerCase();
      this.auth.register(formData).subscribe(
        response => {
          // Handle success
          console.log('Registration successful', response);
          this.router.navigate(['/mainMenu'])

        },
        error => {
          // Handle error
          console.error('Registration failed', error);

        }
      );
    }


  }

}
