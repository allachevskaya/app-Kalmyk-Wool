import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssortmentItemComponent } from './components/assortment-item/assortment-item.component';

import { AssortmentDetailedComponent } from './pages/assortment-detailed/assortment-detailed.component';
import { AssortmentComponent } from './pages/assortment/assortment.component';

import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  {path:'', component: MainComponent},

  {path:'staff', component:StaffComponent},
  {path:'assortment', component:AssortmentComponent},
  {path:'detailed', component:AssortmentDetailedComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
