import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapTwoComponent } from './map-two.component';

const routes: Routes = [{ path: '', component: MapTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapTwoRoutingModule { }
