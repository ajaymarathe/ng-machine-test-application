import { Injectable } from '@angular/core';
import {Student} from './student.model'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  serverUrl='http://localhost:8000/api/student/';

  constructor(private http:HttpClient) { }

getStudentList(){
  return this.http.get(this.serverUrl
    ,{
    headers: {'Accept': 'application/json','Authorization': 'Bearer '+ localStorage.getItem("access_token")}
  }
  );
}

getStudentById(id:number){
  return this.http.get(this.serverUrl +id);
}
postStudentData(student){
  return this.http.post(this.serverUrl,student,{
    headers: {'Accept': 'application/json','Authorization': 'Bearer '+ localStorage.getItem("access_token")}
  })
}
saveStudentData(student,id:number){
  console.log(student);
  return this.http.put(this.serverUrl +id ,student,{
    headers: {'Accept': 'application/json','Authorization': 'Bearer '+ localStorage.getItem("access_token")}
  });
}
deleteStudentData(id){
  console.log('delete:',id);
  return this.http.delete(this.serverUrl+id);
}
// isLoggedIn(){
//   if()
// }
}
