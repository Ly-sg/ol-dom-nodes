import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapTwoRoutingModule } from './map-two-routing.module';
import { MapTwoComponent } from './map-two.component';


@NgModule({
  declarations: [
    MapTwoComponent
  ],
  imports: [
    CommonModule,
    MapTwoRoutingModule
  ]
})
export class MapTwoModule { }
