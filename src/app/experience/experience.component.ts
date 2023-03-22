import { Component,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../service/ui.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  show:boolean = false ;
  subscription?:Subscription;
  
  constructor( private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.show = value)
  }

}
