import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'practica';
  userName:string = "";
  password:string = "";
  show = true;

  toggleButton(){
    if(this.show){
      this.show = false;
    }
    else{
      this.show = true
    }
  }
}
