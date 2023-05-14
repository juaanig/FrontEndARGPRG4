import { Injectable } from '@angular/core';
import { Skills } from '../Interfaces/skills';
import { DataServices } from 'src/app/data.services';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills:Skills[]=[];

  constructor(private skillService:DataServices) { }

  setSkills(skl:Skills[]){
    this.skills = skl;
  }

  getSkills(){
    return this.skillService.getSkills();
  }

  deleteSkill(index:number){
    this.skills.splice(index,1)
    this.skillService.deleteSkill(index)
    this.skillService.saveSkills(this.skills)
  }

  addSkill(skl:Skills){
    this.skills.push(skl);  
    this.skillService.saveSkills(this.skills);
  }


}