import { Component, OnInit } from '@angular/core';
import { PostFirebaseService } from '../services/post-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  getData: any;
  postData1: any;

  constructor(private  postFirebaseService: PostFirebaseService) { }

  ngOnInit() {
    this.showUserListData();
  }
  showUserListData(){
    this.postFirebaseService.getuserListData().subscribe(data => {
      this.getData = data;
    });
  }

  postListData(){
    this.postFirebaseService.postUserData().subscribe(data => {
      this.postData1 = data;
    });
  }
}
