import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoveltyComponent } from './pages/novelty/novelty.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'novelty', component:NoveltyComponent},
  {path:'staff', component:StaffComponent},
  {path:'assortment', component:AssortmentComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
