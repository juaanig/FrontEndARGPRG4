import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../service/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  //Se inyecta el servicio para ejecutar la función toggleAddExperience (similar a CONTEXT de react)
  constructor(private uiService:UiService){}

  onClick = () => this.uiService.toggleAddExperience() ;

}
