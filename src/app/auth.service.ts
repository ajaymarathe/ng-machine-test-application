import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl='http://localhost:8000/api/auth/';

  constructor(private http:HttpClient) { }

login(user){
  console.log(user)
  return this.http.post(this.serverUrl+'login',user);
}
registerUser(user){
  return this.http.post(this.serverUrl+'signup',user);
}

getCurrentUser(){
  let getCurrentUser={'Accept': 'application/json','Authorization': 'Bearer '+ localStorage.getItem("access_token")}
  if(getCurrentUser.Authorization) return true
}

}
