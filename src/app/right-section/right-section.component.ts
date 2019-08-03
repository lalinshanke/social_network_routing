import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})


export class RightSectionComponent implements OnInit {

 test = 1;
 addTest: string;
 twoWay:any;
 shanky: any;



  constructor() { }

  ngOnInit() {
  }

changeColor() {
  this.test = 2;
}

changeText(){
  this.addTest = 'This is javascript';
}

changeSet(){
  this.shanky = '2';
}
}
