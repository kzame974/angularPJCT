import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  appareilName= "J'aime fumer des gros pilons gras";

  constructor() { }

  ngOnInit(): void {
  }

}
