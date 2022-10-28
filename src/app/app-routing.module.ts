import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallNotesComponent } from './components/getall-notes/getall-notes.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'reset',component:ResetComponent},
  {path:'Dashboard',component:DashboardComponent,
  children:[
    {path:'Notes',component:GetallNotesComponent},
    {path:'Archieve',component:ArchieveComponent},
    {path:'Trash',component:TrashComponent},
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
