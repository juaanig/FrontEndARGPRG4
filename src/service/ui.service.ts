import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddExperience:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddExperience():void{
    this.showAddExperience = !this.showAddExperience;
    this.subject.next(this.showAddExperience) 
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }


}
