import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user;
  constructor(private form:FormBuilder,private auth:AuthService,private router: Router) { }

  ngOnInit() {
    this.loginForm=this.form.group({
       email:[''],
      password:['']
    })

  }
  getLogin(){
    this.auth.login(this.loginForm.value)
    .subscribe(res=> {
      this.user=res;
      if(this.user.access_token){
        localStorage.setItem('access_token',this.user.access_token)
        this.router.navigate([''])
      }
    },
    (error) => console.log(error)
    )
  }

}
