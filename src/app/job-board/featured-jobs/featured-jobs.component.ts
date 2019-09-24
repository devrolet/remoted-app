import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-featured-jobs',
  templateUrl: './featured-jobs.component.html',
  styleUrls: ['./featured-jobs.component.css'],
  providers: [JobService]
})
export class FeaturedJobsComponent implements OnInit {
  title = 'Front-End Developer';
  company = 'Chill Creative';
  salary = '100k-120k';

  constructor(private jobService: JobService) { }

  ngOnInit() {}

}
