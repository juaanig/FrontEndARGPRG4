import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studies } from 'src/Interfaces/studies';

//=====================================
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type':'application/json' })
}
//=====================================
@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  private apiUrl = 'http://localhost:5000/studies';

  constructor(private http:HttpClient ) { }

  getStudies(): Observable<Studies[]> {
    return this.http.get<Studies[]>(this.apiUrl);
  }

  deleteStudie(Studie:Studies): Observable<Studies>{
    const url = `${this.apiUrl}/${Studie.id}`;
    return this.http.delete<Studies>(url);
  }

  // updateStudieReminder(Studie:Studie): Observable<Studie>{
  //   const url = `${this.apiUrl}/${Studie.id}`;
  //   return this.http.put<Studie>(url,Studie,httpOptions);
  // }

  addStudie(Studie:Studies):Observable<Studies>{
    return this.http.post<Studies>(this.apiUrl,Studie,httpOptions);
  }
}
