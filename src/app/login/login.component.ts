import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

type UserFields = 'email' | 'password' | 'username' | 'mobile' | 'otp';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  otpVerificationForm: FormGroup;

  public action = 'Register';
  public message = "";
  public regComp: any = null;
  public loginResponse = "";
  public userInfo: any;
  public otpVerification: any = null;

  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'username': '',
    'mobile': '',
    'otp': ''
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
    'username': {
      'required': 'user name is required.',
      'minlength': 'user name must be at least 4 characters long.',
    },
    'mobile': {
      'required': 'mobile no is required',
      'pattern': 'mobile no is not in correct format',

    },
    'otp': {
      'required': 'enter otp to verify mobile no',
    }

  };

  constructor(private router: Router, private fb: FormBuilder, public _authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),

    });

    this.registerForm = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
      'username': new FormControl('', [
        Validators.required
      ]),
      'mobile': new FormControl('', [
        // Validators.pattern('^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$'),
        Validators.required
      ])
    });
    this.otpVerificationForm = this.fb.group({
      'otp': new FormControl('', [
        Validators.required,
      ]),

    })
    this.registerForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged2(data));
    this.onValueChanged();
    this.onValueChanged2();


  }
  onValueChanged2(data?: any) {
    this.message = "";
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password' || field === 'username' || field === 'mobile')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as { [key: string]: string })[key]} `;
              }
            }
          }
        }
      }
    }
  }

  onValueChanged(data?: any) {
    this.message = "";
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password' || field === 'username' || field === 'mobile')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as { [key: string]: string })[key]} `;
              }
            }
          }
        }
      }
    }
  }
  toggle(flag) {
    this.login = flag;
    this.registerForm.reset();
    this.loginForm.reset();
  }

  login() {
    this.message = "Please Wait....";
    var request = this.loginForm.value;
    this._authService.LoginwithAPI(request).subscribe(res => {
      var response = res;
      console.log(response);
      if (response["status"]) {
        this.loginResponse = response["data"];
        localStorage.setItem('token', JSON.stringify({ user: this.loginResponse, token: this.loginResponse["token"] }));
        this._authService.authenticatedUser.user_id = this.loginResponse["user_id"];
        this._authService.authenticatedUser.name = this.loginResponse["name"];
        this._authService.authenticatedUser.email = this.loginResponse["email"];
        this._authService.authenticatedUser.token = this.loginResponse["token"];
        this.message = "";
        this.router.navigate(['/checkout']);

      } else {
        this.message = response["message"];
      }

    })

  }
  Register() {
    var request = this.registerForm.value;
    console.log(request);
    this.regComp = false;
    this.message = "Please wait while we are processing your request ....";
    this._authService.SignUpwithAPI(request).subscribe(res => {
      this.message = "";
      if (res["status"]) {
        this.regComp = true;
        this.userInfo = res["data"];
        console.log(this.userInfo);
      } else {
        setTimeout(() => {
          this.regComp = null;
        }, 500)
      }
    })
  }
  verifyOtp() {
    this.message = "Please Wait";
    this.otpVerification = false;
    var request = { user: this.userInfo, otp: this.otpVerificationForm.value.otp };
    this._authService.verifyOTP(request).subscribe(res => {
      console.log("otp verification", res);
      if (res["status"]) {
        this.otpVerification = true;
        this.otpVerificationForm.reset();
        this.registerForm.reset();
        this.message = res["message"];
      }


    })
  }
  sendOTP() {
    var request = this.userInfo;
    this._authService.sendVerificationOTP(request).subscribe(res => {
      console.log("send otp", res)
      if (res["status"]) {
        this.message = res["message"];
      }




    })
  }
  ngOnDestroy() {
    this.regComp = null;
  }



}
