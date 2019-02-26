import { Injectable } from '@angular/core';
import { BOBJOBS } from "./mock-bob-jobs";
import { BobJob } from "./bob-job";

@Injectable({
  providedIn: 'root'
})
export class BobJobService {
  getAllBobJobs() {
    return BOBJOBS;
  }

  getBobJobById(id: number) {
    BOBJOBS.forEach(job => {
      if(job.id === id) return job;
    });
    return null;
  } 

  getBobJobByUrl(url: string) {
    BOBJOBS.forEach(job => {
      if(job.url === url) return job;
    });
    return null;
  }
}
