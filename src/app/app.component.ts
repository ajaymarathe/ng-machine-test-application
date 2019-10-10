import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  studentList;
  student:Student
  displayedColumns: string[] = ['name', 'email', 'phone_no', 'location','college_name','action'];
  dataSource = this.studentList;
  constructor(private studentService:StudentService,public dialog: MatDialog,public dialogStudent: MatDialog) { }
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
      }
    )
  }
  editStudent(element){
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
  // addstudent(){
  //   const dialogReftes = this.dialogStudent.open(StudentComponent, {
  //     width: '400px',
  //     height:'600px',
  //     data: this.student
  //   });
  // }
}
