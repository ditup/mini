import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { GraphPageComponent } from './containers/graph-page/graph-page.component';
import { MapPageComponent } from './containers/map-page/map-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  },
  {
    path: 'graph',
    component: GraphPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
