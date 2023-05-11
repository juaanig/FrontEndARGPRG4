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

  title:String="";
  studiesData:string=""
  showFormStudies:boolean = false   
  subscription?:Subscription;

  constructor( private uiService:UiService,private studiesService:StudiesService){
    this.subscription = this.uiService.onToggleStd().subscribe(value => this.showFormStudies = value)
  }

  ngOnInit():void{
    this.studiesService.getStudies().subscribe((std)=>{
      this.studies = std;
      console.log(this.studies)
      
    });
    
  }

  toggleAddStudies = () => this.uiService.toggleShowStudies();

  onDelete(std:Studies){}

  onAdd(){}

}
