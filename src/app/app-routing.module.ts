import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'page2',
    component: SecondPageComponent
  },
  {
    path : 'page3',
    component: ThirdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
