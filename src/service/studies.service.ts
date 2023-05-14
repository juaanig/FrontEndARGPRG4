import { Injectable } from '@angular/core';
import { Studies } from 'src/Interfaces/studies';
import { DataServices } from 'src/app/data.services';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  
  studies:Studies[]=[];

  constructor(private studiesServices: DataServices ) { }

  setStudies(std:Studies[]){
    this.studies = std;
  }

  getStudies(){
    return this.studiesServices.getStudies();
  }

  deleteStudie(index:number){
    this.studies.splice(index,1)
    this.studiesServices.deleteStudie(index)
    this.studiesServices.saveStudies(this.studies)

  }

  addStudie(std:Studies){
    this.studies.push(std);  
    this.studiesServices.saveStudies(this.studies);
  }

}
