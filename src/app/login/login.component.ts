import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: any = FormGroup;
  token: any = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AuthserviceService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.loginFormBuild();
  }

  /* Method to build the form group for get login informations */
  loginFormBuild(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // name:new FormControl<string |null>('name', Validators.required),
      Password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  /* Method to submit the login data */
  subData() {
    if (this.loginForm.valid) {
      this.token = true;
      sessionStorage.setItem('Token', this.token);
      this.router.navigate(['/Homepage']);
      console.log(this.loginForm.getRawValues(), 'forValues');
    } else {
      console.log('no');
    }
  }
}
