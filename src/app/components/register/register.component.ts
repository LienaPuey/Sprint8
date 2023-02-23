import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  // signUpUsers: any[] = []; 
  get signUpUsers (){
    return this.userService.signUpUsers;
  }
  set signUpUsers (value:any){
    this.userService.signUpUsers = value;
  }
  signUpObj:any ={
    email: '',
    password: ''
  };
  constructor(private fb: FormBuilder, private userService: UsersService){
    this.registerForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });

  }
  get emailForm(){
    return this.registerForm.get('email')?.value;
  }
  get passwordForm(){
    return this.registerForm.get('password')?.value;
  }
  onSignUp(){
    this.signUpObj = {
      email:  this.emailForm,
      password: this.passwordForm
    }
    if(this.registerForm.valid){
      this.signUpUsers.push(this.signUpObj);
      this.userService.saveUsers();
      this.userService.isLoged();
    }

    // console.log('usuario', this.signUpUsers);

    // localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));

  }
}
