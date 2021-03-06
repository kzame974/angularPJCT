import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() stuffName: string;
  @Input() appareilStatus: string;
  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'éteint') {
      return('red');
    } else if(this.appareilStatus === 'allumé') {
      return('green');
    }
  }
}
