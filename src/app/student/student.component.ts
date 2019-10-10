import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../student.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student;
  StudentForm:FormGroup
  constructor( public dialogRef: MatDialogRef<StudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private form:FormBuilder,private studentService:StudentService,
    ) {
     this.student=data
     console.log(this.student)

    }

  ngOnInit() {
    this.StudentForm = this.form.group({
      name: [''],
      email: [''],
      phone_no: [''],
      location: [''],
      college_name:['']
    });

    this.StudentForm.patchValue(this.student)


  }

  deleteStudent(){
    console.log('delete')
    this.studentService.deleteStudentData(this.student.id)
    .subscribe(
      (response: Response)=>{
        console.log(response);
        this.dialogRef.close(response);

      },
      (error) => {
        this.dialogRef.close(error)

      }
    );
  }

  saveStudent(){
    if(this.student.id){
      this.studentService.saveStudentData(this.StudentForm.value,this.student.id)
      .subscribe(
        (response: Response)=>{
          this.dialogRef.close(response)
          console.log(response);

        },
        (error) => {
          this.dialogRef.close(error)
        }
      );
    }else{
      Object.assign(this.student,this.StudentForm.value)
      this.studentService.postStudentData(this.student).subscribe(res=>console.log(res))
    }

  }
}
