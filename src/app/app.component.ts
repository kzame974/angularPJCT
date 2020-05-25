import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  zamalOne = "Mangue Karot";
  zamalTwo = "Gros pilon gras";
  zamalThree = "Bédo";
  isAuth= false;
  constructor() {
    setTimeout(
       () => {
        this.isAuth =  true;  
      }, 4000
    );
  }
  onAllumer() {
    console.log("Donne ma limé");
  }
}
