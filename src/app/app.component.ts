import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Welcome to Angular';
  update: string='';

  constructor() {
    // setTimeout(()=>{
    //   this.message = 'Welcome message updated at '+ new Date().toLocaleTimeString();
    // },4000);

    setInterval(()=>{
      this.update = 'Welcome message updated at ' + new Date().toLocaleTimeString();
    },1000);
  }
}
