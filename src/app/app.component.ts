import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  lastUpdate = new Promise(
    (resolve) => {

      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  stuffs = [
    {
      name : 'Machine à laver',
      status : 'éteint'
    },
    {
      name : 'Frigo',
      status : 'allumé'
    },
    {
      name : 'Télévision',
      status : 'éteint'
    }
  ];

  isAuth = false;
  constructor() {
    setTimeout(
       () => {
        this.isAuth =  true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('Donne ma limé');
  }
}
