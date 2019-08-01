import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'user/register', component: RegisteruserComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/list', component:ListuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
