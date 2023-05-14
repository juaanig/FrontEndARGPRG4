import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../Interfaces/experience';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { DataServices } from 'src/app/data.services';

//=====================================
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type':'application/json' })
}
//=====================================
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://localhost:5000/experiences';
  experiences:Experience[] = [];

  constructor(private http:HttpClient, private dataServie: DataServices ) { }

  setExperience(exp:Experience[]){
    this.experiences = exp;
  }

  getExperiences(){
    return this.dataServie.getExperiences();

  }

  deleteExperience(index:number){
    this.experiences.splice(index,1)
    this.dataServie.deleteExperience(index)
    this.dataServie.saveExperiences(this.experiences)

  }

  addExperience(experience:Experience){
    this.experiences.push(experience);  
    this.dataServie.saveExperiences(this.experiences);
  }


}