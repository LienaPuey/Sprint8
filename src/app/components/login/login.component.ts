import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get emailForm() {
    return this.loginForm.get('email')?.value;
  }
  
  get passwordForm() {
    return this.loginForm.get('password')?.value;
  }
  
  onLogin() {
    if (this.loginForm.valid) {
      const loggedIn = this.userService.login(this.emailForm, this.passwordForm);
  
      if (loggedIn) {
        alert('Welcome');
        this.router.navigate(['starships']);
        // Redirigir al usuario a la página de inicio
      } else {
        alert('User does not exist.')
        // Mostrar un mensaje de error
      }
    }
  }
}
