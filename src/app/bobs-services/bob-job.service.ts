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
    let bobJob: BobJob;
    BOBJOBS.forEach(job => {
      if(job.id === id) {
        bobJob = job;
        return;
      }
    });
    return bobJob;
  } 

  getBobJobByUrl(url: string) {
    let bobJob: BobJob;
    BOBJOBS.forEach(job => {
      if(job.url === url) {
        bobJob = job;
        return;
      }
    });
    return bobJob;
  }
}
