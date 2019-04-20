import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      name: new FormControl,
      password: new FormControl,
      confirm_password: new FormControl,
    })
  }

  onSubmit() {
    this._authService.register(this._registerForm.value).subscribe( () => {
      this._authService.login(this._registerForm.value);
    });
  }

}
