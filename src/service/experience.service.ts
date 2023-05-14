import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../Interfaces/experience';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { DataServices } from 'src/app/data.services';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences:Experience[] = [];

  constructor(private dataServices: DataServices ) { }

  setExperience(exp:Experience[]){
    this.experiences = exp;
  }

  getExperiences(){
    return this.dataServices.getExperiences();

  }

  deleteExperience(index:number){
    this.experiences.splice(index,1)
    this.dataServices.deleteExperience(index)
    this.dataServices.saveExperiences(this.experiences)

  }

  addExperience(experience:Experience){
    this.experiences.push(experience);  
    this.dataServices.saveExperiences(this.experiences);
  }


}