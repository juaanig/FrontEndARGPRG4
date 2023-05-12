import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Interfaces/skills';
import {HttpClient,HttpHeaders} from '@angular/common/http';


//=====================================
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type':'application/json' })
}
//=====================================
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = 'http://localhost:5000/skills';
  constructor(private http:HttpClient) { }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl);
  }

  deleteSkills(Skills:Skills): Observable<Skills>{
    const url = `${this.apiUrl}/${Skills.id}`;
    return this.http.delete<Skills>(url);
  }

  // updateSkillsReminder(Skills:Skills): Observable<Skills>{
  //   const url = `${this.apiUrl}/${Skills.id}`;
  //   return this.http.put<Skills>(url,Skills,httpOptions);
  // }

  addSkills(Skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(this.apiUrl,Skills,httpOptions);
  }

}