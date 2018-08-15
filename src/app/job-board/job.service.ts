import { Injectable, EventEmitter } from '@angular/core';
import { Job } from '../job-board/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobSelected = new EventEmitter<Job>();

  private jobs: Job[] = [
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
      'Black Rose Coding',
      'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
      'Lorum Ipsum was here to be used for dummy text.'
    )
  ];

  constructor() { }
}
