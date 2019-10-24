import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VindLostComponent} from '../app/vind-lost/vind-lost.component';


const routes = [
  {
    path: 'vind/lost',
    component: VindLostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
