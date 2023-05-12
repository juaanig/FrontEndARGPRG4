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
    this.skillsService.getSkills().subscribe((skl)=>{
      this.skills = skl;      
    });
    
  }

  toggleAddSkills = () => {
    this.uiService.toggleShowSkills() ;

    console.log("se hizo click en habilidad")
  }
  onDelete(skills:Skills){
    this.skillsService.deleteSkills(skills).subscribe(()=>{
      this.skills = this.skills.filter( (skl) => skl.id !== skills.id )
    });
  }


  onAdd(){

    const {title,description} = this
    const newSkill:Skills = {title,description}

    this.skillsService.addSkills(newSkill).subscribe((newSkill)=>{{
      this.skills.push(newSkill)
    }})
    
  
  }

}
