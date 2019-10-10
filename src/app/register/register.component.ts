import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm : FormGroup
  constructor(private form:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {

    this.registrationForm=this.form.group({
    name:[''],
    email:[''],
    password:['']
 })

  }

  getRegister(){
    this.auth.registerUser(this.registrationForm.value).subscribe(res=>{
      if(res){
      this.router.navigate(['login'])
      }
    })
  }
}
