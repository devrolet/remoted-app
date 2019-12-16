import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-featured-jobs',
  templateUrl: './featured-jobs.component.html',
  styleUrls: ['./featured-jobs.component.css'],
  providers: [JobService]
})
export class FeaturedJobsComponent implements OnInit {
  // title = 'Front-End Developer';
  // company = 'Chill Creative';
  // salary = '100k-120k';

  jobs: {
    name: string,
    company: string,
    logoPath: string,
    description: string
  }[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.jobs;
  }

}
