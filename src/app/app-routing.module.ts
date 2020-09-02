import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobBoardComponent } from '../app/job-board/job-board.component';
import { AddJobFormComponent } from '../app/job-board/add-job-form/add-job-form.component';
import { JobDetailComponent } from '../app/job-board/job-detail/job-detail.component';
import {LandingComponent} from '../app/landing/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'jobs', component: JobBoardComponent },
  {path: 'add-job', component: AddJobFormComponent },
  {path: 'job-detail', component: JobDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
