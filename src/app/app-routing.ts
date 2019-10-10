import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
   { path: '', component: StudentListComponent ,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'student', component: StudentComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

