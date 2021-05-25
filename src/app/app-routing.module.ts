import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'map-one', loadChildren: () => import('./map-one/map-one.module').then(m => m.MapOneModule) }, { path: 'map-two', loadChildren: () => import('./map-two/map-two.module').then(m => m.MapTwoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
