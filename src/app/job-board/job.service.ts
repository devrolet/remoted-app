import { Injectable, EventEmitter } from '@angular/core';
import { Job } from '../job-board/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobSelected = new EventEmitter<Job>();

  jobs: Job[] = [
    new Job(
      'Front End Developer',
      'GoGetter Design',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
      'Lorum Ipsum was here to be used for dummy text.'
    ),
    new Job(
      'UI/UX Designer',
      'Illest Musik',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
      'Lorum Ipsum was here to be used for dummy text.'
    ),
    new Job(
      'Web Development Mentor',
      'Black Rose Code',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
      'Lorum Ipsum was here to be used for dummy text.'
    ),
    new Job(
      'Full Stack Developer',
      'Olorun',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
      'Lorum Ipsum was here to be used for dummy text.'
    )
  ];

  constructor() { }

  // setJobs(jobs: Job[]) {
  //   this.jobs = jobs;
  // }

  getJobs() {
    return this.jobs.slice();
    // console.log('This was clicked');
  }

  // getJob(index: number) {
  //   return this.jobs[index];
  // }

  // addJob(job: Job) {
  //   this.jobs.push(job);
  // }

  // updateJob(index: number, newJob: Job) {
  //   this.jobs[index] = newJob;
  // }

  // deleteJob() {
  //   this.jobs.splice(index, 1);
  // }
}
