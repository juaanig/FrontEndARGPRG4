import { Component } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent {

  //TENDRIA QUE CREAR 3 TEMPLATES CON ICONOS
  //TIPO FLECHAS Y DEPENDIENDO LA  

  arrowUp:String = "flecha hacia arriba"; // colocar icono arrow up
  arrowDw:String = "flecha hacia abajo"; // colocar icono arrow down

}
