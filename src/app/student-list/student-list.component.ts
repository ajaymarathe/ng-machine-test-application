import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { StudentComponent } from '../student/student.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList;
  student:Student
  isSelected:boolean=false;
  displayedColumns: string[] = ['name', 'email', 'phone_no', 'location','college_name','action'];
  dataSource = this.studentList;
  constructor(private studentService:StudentService,public dialog: MatDialog,
    public dialogStudent: MatDialog,private router: Router,private auth:AuthService,) { }
  ngOnInit() {
    this.GetStudentList();
  }

  GetStudentList(){

    this.studentService.getStudentList()
    .subscribe(
      (response: Response) => {
        this.studentList= response;
        this.dataSource=this.studentList
        console.log(this.dataSource)
      },
      (error) =>{
        console.log(error)
        this.router.navigate(['login']);
      }
    )
  }
  addStudent(){
    this.isSelected=true;
    this.editStudent(this.isSelected)
    }
  editStudent(element){
    console.log(this.isSelected)
    const dialogRef = this.dialog.open(StudentComponent, {
      width: '400px',
      height:'600px',
      data: element
    });
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.GetStudentList()
      }
    })
  }


  logOut(){
    localStorage.removeItem('access_token');
    this.router.navigate(['login'])
  }
}


