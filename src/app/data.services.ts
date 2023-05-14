import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experience } from "src/Interfaces/experience";
import { Skills } from "src/Interfaces/skills";
import { Studies } from "src/Interfaces/studies";

@Injectable()
export class DataServices{
    
    constructor(private httpClient:HttpClient){}


    //================================= EXPERIENCE =================================
    getExperiences(){
        return this.httpClient.get('https://porfolio10v-default-rtdb.firebaseio.com/datos.json');
    }

    saveExperiences(experience:Experience[]){
        this.httpClient.put('https://porfolio10v-default-rtdb.firebaseio.com/datos.json',experience).subscribe();
    }

    deleteExperience(index:number){
        
        let url = 'https://porfolio10v-default-rtdb.firebaseio.com/datos/' + index + '.json' ;
        this.httpClient.delete(url).subscribe();
    }

    //================================= STUDIES =================================

    getStudies(){
        return this.httpClient.get('https://porfolio10v-default-rtdb.firebaseio.com/studies.json');
    }

    saveStudies(studies:Studies[]){
        this.httpClient.put('https://porfolio10v-default-rtdb.firebaseio.com/studies.json',studies).subscribe();
    }

    deleteStudie(index:number){
        
        let url = 'https://porfolio10v-default-rtdb.firebaseio.com/studies/' + index + '.json' ;
        this.httpClient.delete(url).subscribe();
    }

    //================================= SKILLS =================================

    getSkills(){
        return this.httpClient.get('https://porfolio10v-default-rtdb.firebaseio.com/skills.json');
    }

    saveSkills(skills:Skills[]){
        this.httpClient.put('https://porfolio10v-default-rtdb.firebaseio.com/skills.json',skills).subscribe();
    }

    deleteSkill(index:number){
        
        let url = 'https://porfolio10v-default-rtdb.firebaseio.com/skills/' + index + '.json' ;
        this.httpClient.delete(url).subscribe();
    }
}