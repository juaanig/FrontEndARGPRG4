import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../Interfaces/experience';
import {HttpClient,HttpHeaders} from '@angular/common/http';

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

  constructor(private http:HttpClient ) { }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

  // deleteExperience(Experience:Experience): Observable<Experience>{
  //   const url = `${this.apiUrl}/${Experience.id}`;
  //   return this.http.delete<Experience>(url);
  // }

  // updateExperienceReminder(Experience:Experience): Observable<Experience>{
  //   const url = `${this.apiUrl}/${Experience.id}`;
  //   return this.http.put<Experience>(url,Experience,httpOptions);
  // }

  addExperience(experience:Experience):Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl,experience,httpOptions);
  }


}