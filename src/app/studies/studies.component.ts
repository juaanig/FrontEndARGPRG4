import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Studies } from 'src/Interfaces/studies';
import { StudiesService } from 'src/service/studies.service';
import { UiService } from 'src/service/ui.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {

  studies:Studies[] = [];

  title:string="";
  stdData:string=""
  showFormStudies:boolean = false   
  subscription?:Subscription;

  constructor( private uiService:UiService,private studiesService:StudiesService){
    this.subscription = this.uiService.onToggleStd().subscribe(value => this.showFormStudies = value)
  }

  ngOnInit():void{

    this.studiesService.getStudies().subscribe((e)=>{ 
      this.studies = Object.values(e)
      this.studiesService.setStudies(this.studies)
    })

  }

  toggleAddStudies = () => this.uiService.toggleShowStudies();

  onDelete(std:Studies){
    let index = this.studies.indexOf(std);
    this.studiesService.deleteStudie(index)
  }

  onAdd(){

    const {title,stdData} = this
    const newStudie:Studies = {title,stdData}

    this.studiesService.addStudie(newStudie);
    
  }


}
