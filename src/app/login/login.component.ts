import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: any = FormGroup;
  token: any = '';
  invalid: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginFormBuild();
  }

  /* Method to build the form group for get login informations */
  loginFormBuild(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      Password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  /* Method to submit the login data */
  subData() {
    if (
      this.loginForm.getRawValue().name == 'ravid' &&
      this.loginForm.getRawValue().Password == 12345
    ) {
      this.token = 'user';
      sessionStorage.setItem('Token', this.token);
      this.router.navigate(['/Homepage']);
    } else if (
      this.loginForm.getRawValue().name == 'admin' &&
      this.loginForm.getRawValue().Password == 123456
    ) {
      this.token = 'admin';
      sessionStorage.setItem('Token', this.token);
      this.router.navigate(['/registration']);
    } else {
      this.invalid = true;
    }
  }
}
