import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //============== FormExp ==============
  private showFormExp:boolean = false;
  
  //============== FormStd ==============
  private showFormStd:boolean = false;
  
  //============== FormStd ==============
  private showFormSkl:boolean = false;


  private subject = new Subject<any>();
  private studies = new Subject<any>();
  private skills = new Subject<any>();


  constructor() { }

  //============== FormExp ==============
  toggleShowExperience():void{
    this.showFormExp = !this.showFormExp;
    this.subject.next(this.showFormExp) 
  }
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
  //=====================================

  
  //============== FormStd ==============
  toggleShowStudies():void{
    this.showFormStd = !this.showFormStd;
    this.studies.next(this.showFormStd) 
  }
  onToggleStd():Observable<any>{
    return this.studies.asObservable();
  }
  //=====================================
  
  //============== FormSkl ==============
  toggleShowSkills():void{
    this.showFormSkl = !this.showFormSkl;
    this.skills.next(this.showFormSkl) 
  }
  onToggleSkl():Observable<any>{
    return this.skills.asObservable();
  }
  //=====================================



}
