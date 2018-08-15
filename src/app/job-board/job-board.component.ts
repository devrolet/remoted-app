import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job-board/job.model';
import { JobService } from '../job-board/job.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent implements OnInit {
  @Input() job: Job;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

}
