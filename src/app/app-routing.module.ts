import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TourDetailsComponent } from './dashboard/tour-details/tour-details.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'tour/:id', component: TourDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
