import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job-board/job.model';
import { JobService } from '../job-board/job.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css'],
  providers: [JobService]
})
export class JobBoardComponent implements OnInit {
  @Input() job: Job;

  constructor(private jobService: JobService) { }
  title = 'Front-End Developer';
  company = 'Chill Creative';
  salary = '100k-120k';

  onLoadJobs(name: string,
             company: string,
             logoPath: string,
             desc: string) {
               this.jobService.getJobs();
             }

  ngOnInit() {
  }
}
