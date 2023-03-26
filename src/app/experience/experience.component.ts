import { Component,EventEmitter,Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Experience } from '../Interfaces/experience';
import { ExperienceService } from '../service/experience.service';
import { UiService } from '../service/ui.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences:Experience[] = [];

  title:string = "" ;
  expData:string= "" ;
  show:boolean = false ;
  subscription?:Subscription;
  
  constructor( private uiService:UiService, private experienceService:ExperienceService){
    
    this.subscription = this.uiService.onToggle().subscribe(value => this.show = value)

  }


  //when the component will be mounted , ngOnInit will execute the API call.
  ngOnInit():void{
    this.experienceService.getExperiences().subscribe((exp)=>{
      this.experiences = exp;
    });
  }


  onClick(){

    const {title,expData} = this
    const newExperience:Experience = {title,expData}

    this.experienceService.addExperience(newExperience).subscribe((newExperience)=>{{
      this.experiences.push(newExperience)
    }})
    
    console.log(this.experiences)
  
  }

}
