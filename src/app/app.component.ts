import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  lastUpdate = new Promise(
    (resolve, reject) => {

      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );
  
  zamals = [
    {
      name : "Mangue Karot",
      status : "éteint"
    },
    {
      name : "Gros pilon gras",
      status : "allumé"
    },
    {
      name : "Bédo",
      status : "éteint"
    }
  ];

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
