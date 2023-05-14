import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../../Interfaces/experience';
import { ExperienceService } from '../../service/experience.service';
import { UiService } from '../../service/ui.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences:Experience[] = [];

  title:string = "" ;
  expData:string= "" ;
  showFormExp:boolean = false ;
  subscription?:Subscription;
  
  constructor( private uiService:UiService, private experienceService:ExperienceService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showFormExp = value)
  }
  
  ngOnInit():void{

    this.experienceService.getExperiences().subscribe((e)=>{ 
      this.experiences = Object.values(e)
      this.experienceService.setExperience(this.experiences)
      console.log(this.experiences)
    })

  }

  toggleAddExperience = () => this.uiService.toggleShowExperience() ;

  onDelete(exp:Experience){
    let index = this.experiences.indexOf(exp);
    this.experienceService.deleteExperience(index)
  }

  onAdd(){

    const {title,expData} = this
    const newExperience:Experience = {title,expData}

    this.experienceService.addExperience(newExperience);
    
  }

}
