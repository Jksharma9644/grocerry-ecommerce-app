import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
type UserFields = 'email' | 'password' | 'username' | 'mobile';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  public action = 'Register';
  public message="";
  public regComp:any=null;

  formErrors: FormErrors = {
    'email': '',
    'password': '',
    'username': '',
    'mobile': ''
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

    }
  };

  constructor(private fb: FormBuilder, public _authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      'username': new FormControl('', Validators.required),
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
    this.registerForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password' || field === 'username'  || field === 'mobile')) {
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
  toggle(flag){
   this.login=flag;
   this.registerForm.reset();
   this.loginForm.reset();
  }

  login() {

  }
  Register() {
    var request = this.registerForm.value;
    console.log(request);
    this.regComp=false;
    this.message="Please wait while we are processing your request ....";
    this._authService.SignUpwithAPI(request).subscribe(res => {
      this.message="";
        if(res["status"]){
          this.regComp=true;
        }else{
          setTimeout(()=>{
            this.regComp=null;
          },500)
        }
        this.message=res["message"];
    
    })
  }
  ngOnDestroy(){
    this.regComp=null;
  }



}
