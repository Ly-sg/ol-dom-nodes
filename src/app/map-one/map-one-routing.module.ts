import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapOneComponent } from './map-one.component';

const routes: Routes = [{ path: '', component: MapOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapOneRoutingModule { }
