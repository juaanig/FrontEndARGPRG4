import { Component } from '@angular/core';
import { UiService } from 'src/service/ui.service';
import { Skills } from 'src/Interfaces/skills';
import { SkillsService } from 'src/service/skills.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills:Skills[] = [];

  title:string = "" ;
  description:string= "" ;
  showFormSkl:boolean = false ;
  subscription?:Subscription;
  
  constructor( private uiService:UiService, private skillsService:SkillsService){
    
    this.subscription = this.uiService.onToggleSkl().subscribe(value => this.showFormSkl = value)
  }
  
  ngOnInit():void{

    this.skillsService.getSkills().subscribe((e)=>{ 
      this.skills = Object.values(e)
      this.skillsService.setSkills(this.skills)
    })

  }

  toggleAddSkills = () => this.uiService.toggleShowSkills();

  onDelete(skl:Skills){
    let index = this.skills.indexOf(skl);
    this.skillsService.deleteSkill(index)
  }

  onAdd(){

    const {title,description} = this
    const newSkill:Skills = {title,description}

    this.skillsService.addSkill(newSkill);
    
  }
    
  
}