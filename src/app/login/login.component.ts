import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
  }


  loginProces() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.message == "Authentication successful") {
          console.log(result)
          this.router.navigate(['/mainMenu']);
        } else {
          alert(result.message);
        }

      })
    }
  }
}
