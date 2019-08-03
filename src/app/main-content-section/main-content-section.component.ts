import { Component, OnInit, Input } from '@angular/core';
import { PostFirebaseService } from './../services/post-firebase.service';

@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.css']
})
export class MainContentSectionComponent implements OnInit {

  postData: any;

  @Input() dataList: any;

  constructor(private postFirebaseService: PostFirebaseService) {
    // console.log('Shankarlal', this.dataList);
  }

  postProfile(){

  }

  ngOnInit() {}

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      alert('you just clicked enter');
      // rest of your code
    }
  }

}
