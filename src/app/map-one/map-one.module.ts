import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapOneRoutingModule } from './map-one-routing.module';
import { MapOneComponent } from './map-one.component';


@NgModule({
  declarations: [
    MapOneComponent
  ],
  imports: [
    CommonModule,
    MapOneRoutingModule
  ]
})
export class MapOneModule { }
