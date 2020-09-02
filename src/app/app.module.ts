import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { JobBoardComponent } from './job-board/job-board.component';
import { FeaturedJobsComponent } from './job-board/featured-jobs/featured-jobs.component';
import { FooterComponent } from './footer/footer.component';
import { JobDetailComponent } from './job-board/job-detail/job-detail.component';
import { AddJobFormComponent } from './job-board/add-job-form/add-job-form.component';
import { AdBtnComponent } from './job-board/ad-btn/ad-btn.component';
import { AppRoutingModule } from './/app-routing.module';
import { JobService } from './job-board/job.service';
import { LandingComponent } from './landing/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    JumbotronComponent,
    JobBoardComponent,
    FeaturedJobsComponent,
    FooterComponent,
    JobDetailComponent,
    AddJobFormComponent,
    AdBtnComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
