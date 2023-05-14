import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experience } from "src/Interfaces/experience";

@Injectable()
export class DataServices{
    
    constructor(private httpClient:HttpClient){}

    getExperiences(){
        return this.httpClient.get('https://porfolio10v-default-rtdb.firebaseio.com/datos.json');
    }

    saveExperiences(experience:Experience[]){
        this.httpClient.put('https://porfolio10v-default-rtdb.firebaseio.com/datos.json',experience).subscribe();
    }

    deleteExperience(index:number){
        
        let url = 'https://porfolio10v-default-rtdb.firebaseio.com/datos/' + index + '.json' ;
        console.log(index)
        this.httpClient.delete(url).subscribe();
    }

}