import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm= this.fb.group({
      name: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }
}
