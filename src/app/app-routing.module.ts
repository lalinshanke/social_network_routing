import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './right-section/about-me/about-me.component';
import { MyTalentComponent } from './right-section/my-talent/my-talent.component';
import { RightSectionComponent } from './right-section/right-section.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'app-screen',
    component: WrapperComponent,
    children:[
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'my-talent',
        component: MyTalentComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
