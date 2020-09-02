import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-featured-jobs',
  templateUrl: './featured-jobs.component.html',
  styleUrls: ['./featured-jobs.component.css']
})
export class FeaturedJobsComponent implements OnInit {

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
