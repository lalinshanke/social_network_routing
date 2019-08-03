import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserData } from './../model/userData';

@Injectable({
  providedIn: 'root'
})
export class PostFirebaseService {

  constructor( private http: HttpClient ) { }

  getuserListData(){
    return this.http.get('https://my-angular-chat-app-api.firebaseio.com/userInfo.json' ).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  postUserData() {
    return this.http.post('https://my-angular-chat-post-call.firebaseio.com/userPostInfo.json/', { test: 'checklist' }
    );
  }
  // postUserData( userData: UserData) {
  //   return this.http.post('https://my-angular-chat-app-api.firebaseio.com/userInfo.json/', JSON.stringify(userData)).pipe(
  //     map((response: Response) => {
  //       return response;
  //     })
  //   );
  // }
}
